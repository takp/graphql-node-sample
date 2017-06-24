'use strict'

const { graphql, buildSchema } = require('graphql')

/*
    video
        id
        title
        watched
 */

const schema = buildSchema(`
type Video {
  id: ID,
  title: String,
  watched: Boolean,
}

type Query {
  video: Video
}

type Schema {
  query: Query
}
`)

const resolvers = {
    video: () => ({
        id: () => 1,
        title: () => 'Movie Title',
        watched: () => true,
    })
}

const query = `
query myQuery {
    video {
        id,
        title,
        watched,
    }    
}
`

graphql(schema, query, resolvers)
    .then(result => console.log(result))
    .catch(err => console.log(err))
