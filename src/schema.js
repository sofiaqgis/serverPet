import { gql } from "graphql-tag";

const typeDefs = gql`

type Category {
  id: ID!
  name: String!
  emoji: String
  cover: String
  path: String
  modulesCount: Int
}

type User {
  id: ID!
  password: String!
  favs: [Int]
  avatar: String
  email: String
  modulesCount: Int
}

type Photo {
  id: ID!
  categoryId: Int
  src: String!
  userId: Int
  likes: Int
  modulesCount: Int
}

  type Query {
    users: [User!]!
    user(id: ID!): User
    categories: [Category!]!
    category(id: ID!): Category
    photos: [Photo!]!
    photo(id: ID!): Photo
  }


`;

export default typeDefs;