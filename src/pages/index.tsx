import { Tire } from "@graphql/generated";
import Layout from "../layout/Layout";
import { ReactElement } from "react";
import HomePage from "@components/pages/HomePage";
import getAllTires from "@lib/api/tires/getAllTires";

export async function getServerSideProps() {
  const data = await getAllTires();

  return {
    props: { tires: data.tires },
  };
}

type HomeNextPageProps = {
  tires: Tire[];
};

export default function HomeNextPage({ tires }: HomeNextPageProps) {
  return <HomePage tires={tires} />;
}

HomeNextPage.getLayout = function getLayout(page: ReactElement) {
  return <Layout>{page}</Layout>;
};
