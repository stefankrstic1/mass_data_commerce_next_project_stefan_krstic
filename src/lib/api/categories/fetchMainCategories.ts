import {
  GetAllMainCategoriesQuery,
  GetAllMainCategoriesDocument,
} from "@graphql/generated";
import request from "graphql-request";

const fetchMainCategories = async () =>
  request<GetAllMainCategoriesQuery>(
    process.env.NEXT_PUBLIC_API_URL,
    GetAllMainCategoriesDocument
  );

export default fetchMainCategories;
