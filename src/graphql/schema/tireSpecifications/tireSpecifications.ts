import "reflect-metadata";
import { ObjectType, Field, ID } from "type-graphql";

@ObjectType()
export class TireSpecification {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  sku!: string;

  @Field(() => String)
  size!: string;

  @Field(() => String)
  type!: string;

  @Field(() => String)
  loadRange!: string;

  @Field(() => String)
  speedRating!: string;

  @Field(() => String)
  performance!: string;

  @Field(() => String)
  mpn!: string;

  @Field(() => String)
  overallDiameter!: string;

  @Field(() => String)
  season!: string;

  @Field(() => String)
  aspectRatio!: string;

  @Field(() => String)
  utqg!: string;

  @Field(() => Boolean)
  runFlat!: boolean;

  @Field(() => Boolean)
  rebateAvailable!: boolean;

  @Field(() => String)
  countryOfOrigin!: string;

  @Field(() => String)
  sidewall!: string;

  @Field(() => String)
  loadIndex!: string;

  @Field(() => String)
  sectionWidth!: string;

  @Field(() => String)
  rimDiameter!: string;

  @Field(() => String)
  treadDepth!: string;

  @Field(() => Boolean)
  roadHazardWarranty!: boolean;
}
