import "reddit-cl/styles/globals.css";
import type { AppProps } from "next/app";
import { SessionProvider } from "next-auth/react";
import Header from "../components/Header";
import { ApolloProvider } from "@apollo/client";
import client from "../../appolo-client";

export default function App({
  Component,
  pageProps: { session, ...pageProps },
}: AppProps) {
  return (
    <ApolloProvider client={client}>
      <SessionProvider session={session}>
        <div className="h-screen overflow-y-scroll bg-gray-200">
          <Header />
          <Component {...pageProps} />
        </div>
      </SessionProvider>
    </ApolloProvider>
  );
}
