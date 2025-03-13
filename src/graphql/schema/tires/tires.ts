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

  @Field(() => String)
  size!: string;

  @Field(() => String)
  type!: string;

  @Field(() => Float)
  price!: number;

  @Field(() => Float)
  rating!: number;

  @Field(() => Int)
  stock!: number;

  @Field(() => String)
  image!: string;
}
