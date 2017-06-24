'use strict'

const { graphql, buildSchema } = require('graphql')

/*
    video
        id
        title
        watched
 */

const schema = buildSchema(`
type Query {
  id: ID,
  title: String,
  watched: Boolean,
}

type Schema {
  query: Query
}
`)

const resolvers = {
    id: () => 1,
    title: () => 'Movie Title',
    watched: () => true,
}

const query = `
query myQuery {
    id,
    title,
    watched,
}
`

graphql(schema, query, resolvers)
    .then(result => console.log(result))
    .catch(err => console.log(err))
