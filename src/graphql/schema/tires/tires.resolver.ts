import "reflect-metadata";
import { Resolver, Query, Arg } from "type-graphql";
import tires from "./tires.json";
import { Tire } from "@graphql/schema/tires/tires";

@Resolver(Tire)
export class TireResolver {
  @Query(() => [Tire])
  tires(): Tire[] {
    return tires;
  }

  @Query(() => Tire, { nullable: true })
  tire(@Arg("id") id: number): Tire | undefined {
    return tires.find((tire) => tire.id === id);
  }
}
