import TirePage from "@components/pages/TirePage";
import {
  Tire,
  GetAllTiresQuery,
  GetAllTiresDocument,
} from "@graphql/generated";
import request from "graphql-request";
import { GetStaticPaths, GetStaticProps } from "next";
import React, { ReactElement } from "react";
import Layout from "../../layout/Layout";
import getTire from "@lib/api/tires/getTire";

export const getStaticPaths: GetStaticPaths = async () => {
  const data = await request<GetAllTiresQuery>(
    "http://localhost:3000/api/graphql",
    GetAllTiresDocument
  );

  const paths = data.tires.map((tire: Tire) => ({
    params: { id: tire.id },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const data = await getTire(params?.id);

  return {
    props: { tire: data.tire },
  };
};

type TireNextPageProps = {
  tire: Tire;
};

const TireNextPage = ({ tire }: TireNextPageProps) => {
  return <TirePage tire={tire} />;
};

TireNextPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};

export default TireNextPage;
