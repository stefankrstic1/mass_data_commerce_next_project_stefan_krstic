import { request } from "graphql-request";
import { GetTiresQuery } from "../types/generated";
import {
  GetTireByIdDocument,
  GetTireByIdQuery,
  GetAllTiresDocument,
} from "@graphql/generated";

export async function getServerSideProps() {
  const data = await request<GetTiresQuery>(
    "http://localhost:3000/api/graphql",
    GetAllTiresDocument
  );

  const dataSingleTire = await request<GetTireByIdQuery>(
    "http://localhost:3000/api/graphql",
    GetTireByIdDocument,
    {
      tireId: 2,
    }
  );

  return {
    props: { tires: data.tires, singleTire: dataSingleTire.tire },
  };
}

export default function Home({ tires, singleTire }) {
  return (
    <>
      <div>{JSON.stringify(tires)}</div>
      <div>{JSON.stringify(singleTire)}</div>
    </>
  );
}
