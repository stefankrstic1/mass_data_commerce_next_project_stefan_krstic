import "reflect-metadata";
import { Resolver, Query, Arg } from "type-graphql";
import tireSpecifications from "./tireSpecifications.json";
import { TireSpecification } from "./tireSpecifications";

@Resolver(TireSpecification)
export class TireSpecificationResolver {
  @Query(() => TireSpecification, { nullable: true })
  tireSpecification(@Arg("id") id: number): TireSpecification | undefined {
    const tire = tireSpecifications.find((tire) => tire.id === id);
    if (!tire) {
      return undefined;
    }

    return {
      id: tire.id,
      sku: tire.sku,
      size: tire.size,
      type: tire.type,
      loadRange: tire.loadRange,
      speedRating: tire.speedRating,
      performance: tire.performance,
      mpn: tire.mpn,
      overallDiameter: tire.overallDiameter,
      season: tire.season,
      aspectRatio: tire.aspectRatio,
      utqg: tire.utqg,
      runFlat: tire.runFlat,
      rebateAvailable: tire.rebateAvailable,
      countryOfOrigin: tire.countryOfOrigin,
      sidewall: tire.sidewall,
      loadIndex: tire.loadIndex,
      sectionWidth: tire.sectionWidth,
      rimDiameter: tire.rimDiameter,
      treadDepth: tire.treadDepth,
      roadHazardWarranty: tire.roadHazardWarranty,
    };
  }
}
