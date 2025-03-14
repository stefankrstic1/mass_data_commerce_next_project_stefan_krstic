import "reflect-metadata";
import { ObjectType, Field, ID, Float, Int } from "type-graphql";

@ObjectType()
export class Tire {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  brand!: string;

  @Field(() => String)
  model!: string;

  @Field(() => Float)
  price!: number;

  @Field(() => Float)
  oldPrice!: number;

  @Field(() => Float)
  rating!: number;

  @Field(() => Int)
  stock!: number;

  @Field(() => String)
  image!: string;

  @Field(() => [String])
  galleryImages!: string[];

  @Field(() => String)
  description!: string;

  @Field(() => [String])
  featuresAndBenefits!: string[];

  @Field(() => [ID])
  sizeIds!: number[];
}
