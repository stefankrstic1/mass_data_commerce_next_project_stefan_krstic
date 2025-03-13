import { ApolloServer } from "@apollo/server";
import { startServerAndCreateNextHandler } from "@as-integrations/next";
import { CategoryResolver } from "@graphql/schema/categories/categories.resolver";
import { TireResolver } from "@graphql/schema/tires/tires.resolver";
import "reflect-metadata";
import { buildSchema } from "type-graphql";

const schema = await buildSchema({
  resolvers: [TireResolver, CategoryResolver],
});

const apolloServer = new ApolloServer({ schema });

export default startServerAndCreateNextHandler(apolloServer, {
  context: async (req, res) => ({ req, res }),
});
