const { ApolloServer, gql } = require("apollo-server");

const typeDefs = gql`
  type Student {
    name: String
    id: Int
  }

  type Query {
    students: [Student]
  }
`;

// The Actual data
const students = [
  {
    name: "Ali",
    id: 12,
  },

  {
    name: "raza",
    id: 1554,
  },
];

const resolvers = {
  Query: {
    students: () => students,
  },
};

// Instance of server with two paramerters one is schema and other is the resolver that should run
const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
