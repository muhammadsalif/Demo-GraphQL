// Article following
// https://www.apollographql.com/docs/apollo-server/getting-started/#step-4-define-your-data-set

const { ApolloServer, gql } = require("apollo-server");

const students = [
  {
    id: 1,
    name: "Salif",
    email: "salif@gmail.com",
    rollNo: "1235",
  },
  {
    id: 2,
    name: "Ali",
    email: "ali@gmail.com",
    rollNo: "135",
  },
  {
    id: 3,
    name: "Ahmed",
    email: "ahmed@gmail.com",
    rollNo: "568",
  },
];

// A schema is a collection of type definitions (hence "typeDefs")
// that together define the "shape" of queries that are executed against
// your data.
const typeDefs = gql`
  # Comments in GraphQL strings (such as this one) start with the hash (#) symbol.

  # This "Book" type defines the queryable fields for every book in our data source.
  type Student {
    id: Int
    name: String
    email: String
    rollNo: Int
  }

  # The "Query" type is special: it lists all of the available queries that
  # clients can execute, along with the return type for each. In this
  # case, the "books" query returns an array of zero or more Books (defined above).
  type Query {
    students: [Student]
  }
`;

// Resolvers define the technique for fetching the types defined in the
// schema. This resolver retrieves books from the "books" array above.
const resolvers = {
  Query: {
    students: () => students,
  },
};

// The ApolloServer constructor requires two parameters: your schema
// definition and your set of resolvers.
const server = new ApolloServer({ typeDefs, resolvers });

// The `listen` method launches a web server.
server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
