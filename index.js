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
  videos: [Video],
  video: Video,
}

type Schema {
  query: Query,
}
`)

const videoA = {
    id: 1,
    title: 'title 1',
    watched: true,
}

const videoB = {
    id: 2,
    title: 'title 2',
    watched: false,
}

const videos = [videoA, videoB]

const resolvers = {
    videos: () => videos,
    video: () => ({
        id: () => 1,
        title: () => 'Movie Title',
        watched: () => true,
    })
}

const query = `
query myQuery {
    videos {
        id,
        title,
    },
}
`

graphql(schema, query, resolvers)
    .then(result => console.log(result))
    .catch(err => console.log(err))
