import Home from "./pages/Home";
import NavBar from "./components/NavBar";
import Single from "./pages/Single";
import Write from "./pages/Write";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Authors from "./components/Authors";

import { ApolloProvider, ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri:'http://localhost:5000/graphql',
  cache: new InMemoryCache(),
});


function App() {
  return (
    <>
      <ApolloProvider client={client}>
        <NavBar/>
        <Authors/>
      </ApolloProvider>
    </>
  );
}

export default App;
