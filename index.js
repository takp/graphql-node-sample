'use strict'

const express = require('express')
const graphqlHTTP = require('express-graphql')
const { graphql, buildSchema } = require('graphql')

const PORT = process.env.PORT || 3000
const server = express()

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

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
    rootValue: resolvers,
}))

server.listen(PORT, () => {
    console.log('Listening on http://localhost:${PORT}')
})

// graphql(schema, query, resolvers)
//     .then(result => console.log(result))
//     .catch(err => console.log(err))
