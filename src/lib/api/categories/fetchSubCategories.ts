import {
  GetSubCategoriesDocument,
  GetSubCategoriesQuery,
} from "@graphql/generated";
import request from "graphql-request";

const fetchSubCategories = (id: string) => async () =>
  request<GetSubCategoriesQuery>(
    "http://localhost:3000/api/graphql",
    GetSubCategoriesDocument,
    { parentCategoryId: parseInt(id) }
  );

export default fetchSubCategories;
