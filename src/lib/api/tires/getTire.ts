import { GetTireByIdQuery, GetTireByIdDocument } from "@graphql/generated";
import request from "graphql-request";

const getTire = async (id: string | string[] | undefined) =>
  request<GetTireByIdQuery>(
    "http://localhost:3000/api/graphql",
    GetTireByIdDocument,
    {
      tireId: Number(id),
    }
  );

export default getTire;
