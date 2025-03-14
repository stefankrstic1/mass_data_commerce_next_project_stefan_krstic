import "reflect-metadata";
import { Resolver, Query, Arg, FieldResolver, Root } from "type-graphql";
import tires from "./tires.json";
import { Tire } from "@graphql/schema/tires/tires";
import { TireSpecification } from "../tireSpecifications/tireSpecifications";
import tireSpecifications from "../tireSpecifications/tireSpecifications.json";

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

  @FieldResolver(() => [TireSpecification])
  sizes(@Root() tire: Tire): TireSpecification[] {
    return tire.sizeIds
      .map((sizeId) => tireSpecifications.find((spec) => spec.id === sizeId))
      .filter((spec): spec is TireSpecification => !!spec);
  }
}
