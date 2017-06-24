'use strict'

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

const getVideos = () => new Promise (resolve => resolve(videos))

const getVideoById = (id) => new Promise (resolve => {
    const [video] = videos.filter(v => (v.id + '') === id)
    resolve(video)
})

exports.getVideoById = getVideoById
exports.getVideos = getVideos