'use strict'

const express = require('express')
const graphqlHTTP = require('express-graphql')
const {
    GraphQLSchema,
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLBoolean,
    GraphQLNonNull,
    GraphQLList,
} = require('graphql')
const { getVideoById, getVideos, createVideo } = require('./data')

const PORT = process.env.PORT || 3000
const server = express()

/*
    video
        id
        title
        watched
 */

const videoType = new GraphQLObjectType({
    name: 'Video',
    description: 'video',
    fields: {
        id: {
            type: GraphQLID,
            description: 'id of video',
        },
        title: {
            type: GraphQLString,
            description: 'title of video'
        },
        watched: {
            type: GraphQLBoolean,
            description: 'has watched'
        }
    }
})

const queryType = new GraphQLObjectType({
    name: 'QueryType',
    description: 'root query',
    fields: {
        videos: {
            type: new GraphQLList(videoType),
            description: 'List of video',
            resolve: getVideos
        },
        video: {
            type: videoType,
            args: {
                id: {
                    type: new GraphQLNonNull(GraphQLID),
                    description: 'id of video',
                }
            },
            resolve: (_, args) => getVideoById(args.id)
        }
    }
})

const mutationType = new GraphQLObjectType({
    name: 'Mutation',
    description: 'Mutation type',
    fields: {
        createVideo: {
            type: videoType,
            args: {
                title: {
                    type: new GraphQLNonNull(GraphQLString),
                    description: 'title of video',
                },
            },
            resolve: (_, args) => {
                return createVideo(args)
            }
        },
    },
})

const schema = new GraphQLSchema({
    query: queryType,
    mutation: mutationType,
})

server.use('/graphql', graphqlHTTP({
    schema,
    graphiql: true,
}))

server.listen(PORT, () => {
    console.log('Listening on http://localhost:${PORT}')
})
