import 'reflect-metadata';
import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { createConnection } from 'typeorm';
import schema from './schema';
import resolvers from './resolvers';

export default async () => {
  const app = express();

  await createConnection();

  const server = new ApolloServer({ typeDefs: schema, resolvers });
  server.applyMiddleware({ app });

  return app;
};
