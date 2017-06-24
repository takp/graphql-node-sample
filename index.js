'use strict'

const {graphql, buildSchema} = require('graphql')

const schema = buildSchema(`
type Query {
  foo: String
}

type Schema {
  query: Query
}
`)

const resolvers = {
            foo: () => 'bar',
    }

const query = `
query myQuery {
  foo
}
`

graphql(schema, query, resolvers)
    .then(result => console.log(result))
    .catch(err => console.log(err))
