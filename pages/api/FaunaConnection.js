require('dotenv').config()
const faunadb = require('faunadb')
const secret = process.env.FAUNADB_SECRET_KEY

class FaunaConnection {
  constructor(options) {
    const { secret }  = options
    this.q = faunadb.query
    this.client = new faunadb.Client({ secret })
    this.size = 64;
  }

  createDB(name) {
    return this.client.query(
      this.q.CreateDatabase({ name: name })
    )
  }

  createServer(dbName) {
    return this.client.query(
      this.q.CreateKey({
        database: this.q.Database(dbName),
        role: 'server'
      })
    )
  }

  createCollection(name) {
    return this.client.query(
      this.q.CreateCollection({ name: name})
    )
  }

  createIndex(name, src, terms=null, values=null) {
    return this.client.query(
      this.q.CreateIndex({
        name: name,
        source: this.q.Collection(src),
        terms: terms,
        values: values
      })
    )
  }

  create(collection, doc) {
    return this.client.query(
      this.q.Create(
        this.q.Collection(collection),
        { data: doc }
      )
    )
  }

  createMultiple(collection, docs) {
    return this.client.query(
      this.q.Map(
        docs,
        this.q.Lambda(
          'doc',
          this.q.Create(
            this.q.Collection(collection),
            { data: this.q.Var('doc') }
          )
        )
      )
    )
  }

  createMultipleCustomID(collection, touples) {
    return this.client.query(
      this.q.Map(
        touples,
        this.q.Lambda(
          ['id', 'data'],
          this.q.Create(
            this.q.Ref(this.q.Collection(collection), this.q.Var('id')),
            { data: this.q.Var('data') }
          )
        )
      )
    )
  }

  /**
   * Retrieve a document given its ref and collection
   * 
   * @param  {string} ref        the ID or ref of the document
   * @param  {string} collection the name of the collection
   * @return {Object}            the document identified by the query
   */
  get(ref, collection) {
    return this.client.query(
      this.q.Get(
        this.q.Ref(
          this.q.Collection(collection),
          ref
        )
      )
    )
  }

  /**
   * Retrieve the first document that matches the given value 
   * of a term used to create the index. For example, if we 
   * have an index called "posts_by_title" whose term was set 
   * to "title", we can search that index using a value of 
   * "My Blog Post" to see if any posts' titles match our value.
   * 
   * @param  {string} index name of index to search on
   * @param  {multiple} value the value to match on the index term
   * @return {Object}       the first matching document
   */
  getMatch(index, value) {
    return this.client.query(
      this.q.Get(
        this.q.Match(
          this.q.Index(index),
          value
        )
      )
    )
  }

  /**
   * Given an index 'all_<items>' with no set terms or values,
   * this will return the refs of all documents in that index.
   * 
   * @param  {[type]} index [description]
   * @param  {[type]} size  [description]
   * @return {[type]}       [description]
   */
  getAllRefsByIndex(index, size) {
    return this.client.query(
      this.q.Paginate(
        this.q.Match(
          this.q.Index(index)
        ),
        { size: size || this.size }
      )
    )
  }

  _buildRef(options) {
    return this.q.Ref(this.q.Collection(options.collection), options.ref)
  }

  /**
   * Provided with an index, returns all matching documents
   * 
   * @param  {string} index   name of the index
   * @param  {Object} options options that may be passed in include:
   * before - ref to document for traversing pagination backward
   * after - ref to document for traversing pagination forward
   * term - a such term to use with a searchable index
   * size - the number of docs to return per page
   * scope - the database ref within which to perform the match
   * @return {Object}         Returns a collection of docs matching 
   * the query conditions
   */
  getAllDocsByIndex(index, options = {}) {
    if (options.before && options.before.collection) {
      options.before = this._buildRef(options.before)
    } 
    else if (options.after && options.after.collection) {
      options.after = this._buildRef(options.after)
    }
    return this.client.query(
      this.q.Map(
        this.q.Paginate(
          this.q.Match(
            this.q.Index(index, options.scope),
            options.term
          ),
          { 
            size: options.size || this.size,
            before: options.before,
            after: options.after
           }
        ),
        ref => this.q.Get(ref) 
      )
    )
  }

  /**
   * Given the ref and collection this will update the
   * data of that document.
   * 
   * @param  {string} ref        the ID or ref of the doc
   * @param  {string} collection the name of the collection
   * @param  {Object} data       the data to be updated
   * @return {Object}            the updated document
   */
  update(ref, collection, data) {
    return this.client.query(
      this.q.Update(
        this.q.Ref(
          this.q.Collection(collection),
          ref
        ),
        { data : data }
      )
    )
  }

  /**
   * Given the ref and collection this will replace the
   * data of that document whose fields match the given data.
   * Any old fields in the document that are not mentioned in
   * the data param are removed.
   * 
   * @param  {string} ref        the ID or ref of the doc
   * @param  {string} collection the name of the collection
   * @param  {Object} data       the data to be replace
   * @return {Object}            the updated document
   */
  replace(ref, collection, data) {
    return this.client.query(
      this.q.Replace(
        this.q.Ref(
          this.q.Collection(collection),
          ref
        ),
        { data: data }
      )
    )
  }

  /**
   * Destroys a document
   * @param  {string} ref        the ID or ref of the doc
   * @param  {string} collection the name of the collection
   * @return {Object}            the deleted document
   */
  delete(ref, collection) {
    return this.client.query(
      this.q.Delete(
        this.q.Ref(
          this.q.Collection(collection),
          ref
        )
      )
    )
  }

  paginateDB(dbName, size) {
    return this.client.query(
      this.q.Paginate(
        this.q.Database(dbName),
        { size: size || this.size }
      )
    )
  }

  getDatabase(dbName) {
    return this.client.query(
      this.q.Get(
        this.q.Database(dbName)
      )
    )
  }

}


const fauna = new FaunaConnection({secret: secret})

opts = {
  term: 'Alan'
}

fauna
  .getAllRefsByIndex('posts_by_title')
  .then(res => {
    console.log(res)
    if (res.data.length > 0) res.data.forEach(doc => console.log('doc: ', doc))

  })
  .catch(err => console.log(err))


