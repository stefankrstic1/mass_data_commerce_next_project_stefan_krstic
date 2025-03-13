import "reflect-metadata";
import { ObjectType, Field, ID, Int } from "type-graphql";

@ObjectType()
export class Category {
  @Field(() => ID)
  id!: number;

  @Field(() => String)
  name!: string;

  @Field(() => Int)
  productCount!: number;

  @Field(() => Int, { nullable: true })
  parentCategoryId?: number | null;
}
