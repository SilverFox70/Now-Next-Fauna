require('dotenv').config()
const faunadb = require('faunadb')
const secret = process.env.FAUNADB_SECRET_KEY

class FaunaConnection {
  constructor(options) {
    const { secret }  = options
    this.q = faunadb.query
    this.client = new faunadb.Client({ secret })
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

}

const fauna = new FaunaConnection({secret: secret})

// const terms = {
// //   field: ['data', 'title']
// // }
// const doc = {
//   title: "The story of the wrapper",
//   author: "Me 4 Reals",
//   post: "A long time ago, in a kitchen far, far away..."
// }

// const docs = [
//   { title: "My cat and other marvels" },
//   { title: "Pondering during a commute" },
//   { title: "Deep meanings ina latte" }
// ]

fauna
  .getMatch('posts_by_title', 'The story of the wrapper')
  .then(res => console.log(res))
  .catch(err => console.log(err))