# Introduction
This repository showcases the creation of a GraphQL server using Fastify, Mercurius, and GraphQL. The project evolves through different versions, each offering more features and complex responses.

The project consists of three versions of a GraphQL server:

- `server_v0.js`: Returns a hardcoded name and message.
- `server_v1.js`: Expands functionality to request name and message.
- `server.js`: Returns properties with attributes such as description and address.

### Requirements
Ensure you have the following libraries installed:
- [Fastify](https://www.fastify.io/)
- [Mercurius](https://mercurius.dev/)
- [GraphQL](https://graphql.org/)

# Clone and Setup
### Clone the repository:
This is how to get the project from Github
```
git clone https://github.com/tomsouza4/graphql-from-scratch.git
```

Or you can create your own:
Navigate to the desired folder:

```sh
cd ~/Documents
```

Create and enter the folder:

```sh 
mkdir graphql-from-scratch
cd graphql-from-scratch
```

Initialize the project:

```sh
npm init --yes
```

Install required libs for this project
```sh
npm install fastify mercurius graphql
```

Open the project with Visual Code(May require to add this PATH, on Visual Code run: Shell Command: Install 'code' command in PATH)
```sh
code .
```

# Output Sample
### `server_v0.js`

```
data	
     sayHello	
         name	"Akshay"
         message	"Akshay> Learning GraphQL"
```
### `server_v1.js`

```graphql
{
    "data": {
      "sayHello": {
        "name": "Luis F.",
        "message": "Luis F.> I like GraphQL"
      }
    }
  }
```

### `server.js`


- 1. Sample result from code:
```graphql
{
    "data": {
      "availableProperties": [
        {
          "description": "A big house",
          "address": {
            "street": "123 Elm St",
            "city": "Miami",
            "state": "FL",
            "zipCode": 33137
          }
        }
      ]
    }
  }
```

- 2. After updating const resolvers to filter by city 
```graphql
{
    "data": {
      "availableProperties": [
        {
          "description": "A big pink house with yellow people",
          "address": {
            "street": "321 Evergreen Lane",
            "city": "Springfield",
            "state": "MO",
            "zipCode": 44212
          }
        }
      ]
    }
  }
```

### Resources Used
- [Introducing the Salesforce GraphQL API](https://developer.salesforce.com/blogs/2022/03/introducing-the-salesforce-graphql-api)
- [Exploring the Salesforce GraphQL API – Part Two](https://developer.salesforce.com/blogs/2022/05/exploring-the-salesforce-graphql-api-part-two)
- [codeLive: How to Implement a GraphQL API from Scratch](https://www.youtube.com/watch?v=WXSnXAhKvag)