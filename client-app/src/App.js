import React from "react";
import { render } from "react-dom";

import { ApolloProvider } from "@apollo/client";
import client from "./config/gql_config";
import Students from "./Students";
function App() {
  return (
    <ApolloProvider client={client}>
      <div>
        <h2>My first Apollo app 🚀</h2>
        <Students></Students>
      </div>
    </ApolloProvider>
  );
}
export default App;
