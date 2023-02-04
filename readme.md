Database: MySQL
ORM: Sequelize
Node Version: v14.19.3
Author: Hernán Fabrica

# 1 - Create user mutation (required)
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

## Scenario: List users
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
## Scenario: List users next page && Scenario: List users for page
Right now I am learning how to create cursor-based-pagination, sorry :(

## Add friend mutation (optional)

WIP

## Update user mutation (optional)
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

WIP

