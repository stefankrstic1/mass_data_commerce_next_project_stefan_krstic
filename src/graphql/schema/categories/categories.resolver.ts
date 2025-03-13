import "reflect-metadata";
import { Resolver, Query, Arg } from "type-graphql";
import { Category } from "@graphql/schema/categories/categories";
import categories from "./categories.json"; // Assuming you have a JSON file with categories data

@Resolver(Category)
export class CategoryResolver {
  @Query(() => [Category])
  mainCategories(): Category[] {
    return categories.filter((category) => category.parentCategoryId === null);
  }

  @Query(() => [Category])
  subCategories(@Arg("parentCategoryId") parentCategoryId: number): Category[] {
    return categories.filter(
      (category) => category.parentCategoryId === parentCategoryId
    );
  }
}
