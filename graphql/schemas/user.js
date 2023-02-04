const { gql } = require('apollo-server-express');

module.exports = gql`

 type User {
     id: Int!
     email: String!
     firstName: String!
     lastName: String!
     gender: genderType!
     imageUrl: String
 }

 enum genderType {
    FEMALE
    MALE
    OTHER
 }

extend type Query {
    getUsers: [User!]
    getUsersPerPage(limit: Int): [User!]
}

 extend type Mutation {
    createUser(input: createUserInput!): createUserResponse
    updateUser(input: updateUserInput!): updateUserResponse
 }

 type createUserResponse {
    email: String!
    firstName: String!
    lastName: String!
    gender: genderType!
    imageUrl: String
 }

 input createUserInput {
    email: String!
    firstName: String!
    lastName: String!
    gender: genderType!
    imageUrl: String
 }

 type updateUserResponse {
    email: String!
    firstName: String!
    lastName: String!
    gender: genderType!
    imageUrl: String
 }

input updateUserInput {
    email: String!
    firstName: String!
    lastName: String!
    gender: genderType!
    imageUrl: String
 }
`;
