import { GetAllTiresQuery, GetAllTiresDocument } from "@graphql/generated";
import request from "graphql-request";

const getAllTires = async () =>
  request<GetAllTiresQuery>(
    "http://localhost:3000/api/graphql",
    GetAllTiresDocument
  );

export default getAllTires;
