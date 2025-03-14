import { GetAllTiresQuery, GetAllTiresDocument } from "@graphql/generated";
import request from "graphql-request";

const getAllTires = async () =>
  request<GetAllTiresQuery>(
    process.env.NEXT_PUBLIC_API_URL,
    GetAllTiresDocument
  );

export default getAllTires;
