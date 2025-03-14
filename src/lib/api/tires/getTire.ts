import { GetTireByIdQuery, GetTireByIdDocument } from "@graphql/generated";
import request from "graphql-request";

const getTire = async (id: string | string[] | undefined) =>
  request<GetTireByIdQuery>(
    process.env.NEXT_PUBLIC_API_URL,
    GetTireByIdDocument,
    {
      tireId: Number(id),
    }
  );

export default getTire;
