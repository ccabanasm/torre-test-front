import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import {
    ApolloClient,
    InMemoryCache,
    createHttpLink,
    ApolloProvider,
} from "@apollo/client";

const httpLink = createHttpLink({
    // uri: "https://torretestapi.matztek.com",
    uri: "http://192.168.0.9:8080/query",
});

const client = new ApolloClient({
    link: httpLink,
    cache: new InMemoryCache(),
});

ReactDOM.render(
    <React.StrictMode>
        <ApolloProvider client={client}>
            <App />
        </ApolloProvider>
    </React.StrictMode>,
    document.getElementById("root")
);