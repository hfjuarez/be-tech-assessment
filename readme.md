Database: MySQL
ORM: Sequelize
Node Version: v14.19.3
Author: Hernán Fabrica

# 1 - Create user mutation (required)
As a User, I want to be able to join the system
## Scenario: Create
Given I want to add a new user to the system When sending the correct information
Then create a new user in the DB
Types definitions:
Mutation accepted parameters:
- email (required and unique)
- firstName (required)
- lastName (required)
- gender (required)
- imageUrl (optional)
User attributes to be stored in the DB: ● Id
- email
- firstName  
- lastName 
- gender
- imageUrl 
- createdAt

```
mutation createUser {
  createUser(input: { email: "test1@test.com", firstName: "Juan", lastName: "Perez", gender: MALE, imageUrl: "https://place-puppy.com/300x300" }) {
  	email
    firstName
    lastName
    gender
    imageUrl
	}
}
```
# 2 - List users query (required)
As a system User, I want to have the ability to list all the users in the system

## Scenario: List users
Given I want to see every user in the system 
When hitting the query
Then return every user’s information
```
query listUsers {
  getUsers{
  	email
    firstName
    lastName
    gender
    imageUrl
  }
}
```

## Scenario: List users page size
Given I want to see every user in the system
When hitting the query
Then have the possibility to pass the page size as a parameter (default it to 10)
```
query listUsersPerPage {
  getUsersPerPage(limit:1) {
  	email
    firstName
    lastName
    gender
    imageUrl
  }
}
```
## Scenario: List users next page
Given I want to see every user in the system
When hitting the query and the amount of results is greater than the page size 
Then return a next page cursor so we can see next pages
## Scenario: List users for page

Given I want to see the users in the system
When hitting the query with a next page parameter 
Then return the users corresponding to that page

# Add friend mutation (optional)
As a User, I want to have the ability to add another one to my friends list

## Scenario: Add friend
Given I want to add another user as friend
When hitting the mutation
Then add the user to my friends list

Restrictions: Users cannot add themselves as friends
Given we are not managing authentication, the mutation must receive two userIds
# Update user mutation (optional)
As a User, I would like be able to update my information when needed
Scenario: Update
Given I want to update my personal information 
When sending the correct data
Then update the user
```
mutation updateUser {
  updateUser(input: { email: "test1@test.com", firstName: "Lucas", lastName: "Perez", gender: MALE, imageUrl: "https://place-puppy.com/300x300" }) {
  	email
    firstName
    lastName
    gender
	}
}
```

## Test the API (optional)

As a developer, I would like to have a complete test suite so that I know the API is working as expected.
## Scenario: User unit testing
Given the user model
Then have a complete set of tests to ensure it behaves as expected
## Scenario: API integration testing
Given the API query and mutations
Then have a complete set of tests to ensure they behave as expected

