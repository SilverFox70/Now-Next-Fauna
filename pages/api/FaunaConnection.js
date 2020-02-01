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
        terms: [terms],
        values: [values]
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

  getAllRefs(index, size) {
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

  getAllByIndex(index, size, before, after) {
    if (before.collection) {
      before = this._buildRef(before)
    } 
    else if (after.collection) {
      after = this._buildRef(after)
    }
    return this.client.query(
      this.q.Map(
        this.q.Paginate(
          this.q.Match(
            this.q.Index(index)
          ),
          { 
            size: size || this.size,
            before: before || undefined,
            after: after || undefined
           }
        ),
        ref => this.q.Get(ref) 
      )
    )
  }

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

fauna
  .getAllByIndex('all_letters', 3)
  .then(res => {
    console.log(res)
    // fauna
    //   .getAllByIndex('all_letters', 3, 0, res.after)
    //   .then(res => console.log(res))
    //   .catch(err => console.log(err))

  })
  .catch(err => console.log(err))


