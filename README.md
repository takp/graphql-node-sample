# graphql-node-sample

This is sample project for [GraphQL](http://graphql.org/) with Node and express.

## Start

```bash
$ yarn add graphql
$ yarn add express express-graphql
```

## Run

```bash
$ node index.js
```

and open [http://localhost:3000/graphql](http://localhost:3000/graphql).

## Get video by ID

Input

```
{
  video(id: 1){
    id,
    title,
    watched,
  }
}
```

and you can get

```
{
  "data": {
    "video": {
      "id": "1",
      "title": "title 1",
      "watched": true
    }
  }
}
```

## Mutate video

Input

```
mutation M {
  createVideo(title: "hoge") {
    id,
    title,
    watched,
  }
}
```

and you can get

```
{
  "data": {
    "createVideo": {
      "id": "3",
      "title": "hoge",
      "watched": false
    }
  }
}
```

# Ref

- http://graphql.org/
