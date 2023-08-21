import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { InMemoryCache, split } from '@apollo/client/core';
import { ApolloClientOptions } from '@apollo/client/core/ApolloClient';
import { setContext } from '@apollo/client/link/context';
import { GraphQLWsLink } from '@apollo/client/link/subscriptions';
import { getMainDefinition } from '@apollo/client/utilities';
import { APOLLO_OPTIONS, ApolloModule } from 'apollo-angular';
import { HttpLink } from 'apollo-angular/http';
// import extractFiles from 'extract-files/extractFiles.mjs';
// import isExtractableFile from 'extract-files/isExtractableFile.mjs';
import { createClient } from 'graphql-ws';

const uri: any = 'http://192.168.12.246:5000/graphql'; // <-- add the URL of the GraphQL server here

export function createApollo(httpLink: HttpLink): ApolloClientOptions<any> {
  const basic = setContext((operation, context) => ({
    headers: {
      Accept: 'charset=utf-8',
      'Content-Type': 'application/json',
    },
  }));

  // const auth: any = setContext((operation, context) => {
  //   const token: any = JSON.parse(localStorage.getItem('auth_token'));
  //   if (token === null) {
  //     return {};
  //   } else {
  //     return {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     };
  //   }
  // });

  // const http = httpLink.create({
  //   uri: 'http://192.168.12.246:5000/graphql',
  // });

  // const http = ApolloLink.from([
  //   basic,
  //   auth,
  //   httpLink.create({
  //     uri,
  //     extractFiles: (body) => extractFiles(body, isExtractableFile),
  //   }),
  // ]);

  const ws = new GraphQLWsLink(
    createClient({
      url: 'ws://192.168.12.246:5000/subscriptions',
    })
  );

  const cache = new InMemoryCache();

  const link = split(
    // split based on operation type
    ({ query }) => {
      // const { kind, operation } = getMainDefinition(query);
      let definition = getMainDefinition(query);
      // console.log('definition', definition);
      return (
        definition.kind === 'OperationDefinition' &&
        definition.operation === 'subscription'
      );
    },
    ws
    // http
  );
  return {
    link,
    cache,
  };
}

@NgModule({
  exports: [HttpClientModule, ApolloModule],
  providers: [
    {
      provide: APOLLO_OPTIONS,
      useFactory: createApollo,
      deps: [HttpLink],
    },
  ],
})
export class GraphQLModule {}
