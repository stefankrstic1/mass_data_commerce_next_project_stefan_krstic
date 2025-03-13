import {
  GetAllMainCategoriesQuery,
  GetAllMainCategoriesDocument,
} from "@graphql/generated";
import request from "graphql-request";

const fetchMainCategories = async () =>
  request<GetAllMainCategoriesQuery>(
    "http://localhost:3000/api/graphql",
    GetAllMainCategoriesDocument
  );

export default fetchMainCategories;
