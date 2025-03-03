import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { TireResolver } from "@graphql/schema/tires/tires.resolver";
import "reflect-metadata";
import { buildSchema } from "type-graphql";

const schema = await buildSchema({
  resolvers: [TireResolver],
});

const apolloServer = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
});
