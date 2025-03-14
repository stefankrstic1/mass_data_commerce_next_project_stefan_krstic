import {
  GetTireSpecificationByIdDocument,
  GetTireSpecificationByIdQuery,
} from "@graphql/generated";
import request from "graphql-request";

const fetchTireSpecificationById = (id: string | null) => async () =>
  request<GetTireSpecificationByIdQuery>(
    process.env.NEXT_PUBLIC_API_URL,
    GetTireSpecificationByIdDocument,
    {
      tireSpecificationId: Number(id),
    }
  );

export default fetchTireSpecificationById;
