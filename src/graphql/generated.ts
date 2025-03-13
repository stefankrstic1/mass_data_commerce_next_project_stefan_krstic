/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { GraphQLClient, RequestOptions } from "graphql-request";
import gql from "graphql-tag";
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = {
  [K in keyof T]: T[K];
};
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]?: Maybe<T[SubKey]>;
};
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & {
  [SubKey in K]: Maybe<T[SubKey]>;
};
export type MakeEmpty<
  T extends { [key: string]: unknown },
  K extends keyof T
> = { [_ in K]?: never };
export type Incremental<T> =
  | T
  | {
      [P in keyof T]?: P extends " $fragmentName" | "__typename" ? T[P] : never;
    };
type GraphQLClientRequestHeaders = RequestOptions["requestHeaders"];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string };
  String: { input: string; output: string };
  Boolean: { input: boolean; output: boolean };
  Int: { input: number; output: number };
  Float: { input: number; output: number };
};

export type Category = {
  __typename?: "Category";
  id: Scalars["ID"]["output"];
  name: Scalars["String"]["output"];
  parentCategoryId?: Maybe<Scalars["Int"]["output"]>;
  productCount: Scalars["Int"]["output"];
};

export type Query = {
  __typename?: "Query";
  mainCategories: Array<Category>;
  subCategories: Array<Category>;
  tire?: Maybe<Tire>;
  tires: Array<Tire>;
};

export type QuerySubCategoriesArgs = {
  parentCategoryId: Scalars["Float"]["input"];
};

export type QueryTireArgs = {
  id: Scalars["Float"]["input"];
};

export type Tire = {
  __typename?: "Tire";
  brand: Scalars["String"]["output"];
  id: Scalars["ID"]["output"];
  image: Scalars["String"]["output"];
  model: Scalars["String"]["output"];
  price: Scalars["Float"]["output"];
  rating: Scalars["Float"]["output"];
  size: Scalars["String"]["output"];
  stock: Scalars["Int"]["output"];
  type: Scalars["String"]["output"];
};

export type GetAllMainCategoriesQueryVariables = Exact<{
  [key: string]: never;
}>;

export type GetAllMainCategoriesQuery = {
  __typename?: "Query";
  mainCategories: Array<{
    __typename?: "Category";
    id: string;
    name: string;
    productCount: number;
    parentCategoryId?: number | null;
  }>;
};

export type GetSubCategoriesQueryVariables = Exact<{
  parentCategoryId: Scalars["Float"]["input"];
}>;

export type GetSubCategoriesQuery = {
  __typename?: "Query";
  subCategories: Array<{
    __typename?: "Category";
    id: string;
    name: string;
    productCount: number;
    parentCategoryId?: number | null;
  }>;
};

export type GetAllTiresQueryVariables = Exact<{ [key: string]: never }>;

export type GetAllTiresQuery = {
  __typename?: "Query";
  tires: Array<{
    __typename?: "Tire";
    id: string;
    brand: string;
    model: string;
    price: number;
    rating: number;
    size: string;
    stock: number;
    type: string;
    image: string;
  }>;
};

export type GetTireByIdQueryVariables = Exact<{
  tireId: Scalars["Float"]["input"];
}>;

export type GetTireByIdQuery = {
  __typename?: "Query";
  tire?: {
    __typename?: "Tire";
    id: string;
    brand: string;
    model: string;
    price: number;
    rating: number;
    size: string;
    stock: number;
    type: string;
  } | null;
};

export const GetAllMainCategoriesDocument = gql`
  query GetAllMainCategories {
    mainCategories {
      id
      name
      productCount
      parentCategoryId
    }
  }
`;
export const GetSubCategoriesDocument = gql`
  query GetSubCategories($parentCategoryId: Float!) {
    subCategories(parentCategoryId: $parentCategoryId) {
      id
      name
      productCount
      parentCategoryId
    }
  }
`;
export const GetAllTiresDocument = gql`
  query GetAllTires {
    tires {
      id
      brand
      model
      price
      rating
      size
      stock
      type
      image
    }
  }
`;
export const GetTireByIdDocument = gql`
  query GetTireById($tireId: Float!) {
    tire(id: $tireId) {
      id
      brand
      model
      price
      rating
      size
      stock
      type
    }
  }
`;

export type SdkFunctionWrapper = <T>(
  action: (requestHeaders?: Record<string, string>) => Promise<T>,
  operationName: string,
  operationType?: string,
  variables?: any
) => Promise<T>;

const defaultWrapper: SdkFunctionWrapper = (
  action,
  _operationName,
  _operationType,
  _variables
) => action();

export function getSdk(
  client: GraphQLClient,
  withWrapper: SdkFunctionWrapper = defaultWrapper
) {
  return {
    GetAllMainCategories(
      variables?: GetAllMainCategoriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAllMainCategoriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAllMainCategoriesQuery>(
            GetAllMainCategoriesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetAllMainCategories",
        "query",
        variables
      );
    },
    GetSubCategories(
      variables: GetSubCategoriesQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetSubCategoriesQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetSubCategoriesQuery>(
            GetSubCategoriesDocument,
            variables,
            { ...requestHeaders, ...wrappedRequestHeaders }
          ),
        "GetSubCategories",
        "query",
        variables
      );
    },
    GetAllTires(
      variables?: GetAllTiresQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetAllTiresQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetAllTiresQuery>(GetAllTiresDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetAllTires",
        "query",
        variables
      );
    },
    GetTireById(
      variables: GetTireByIdQueryVariables,
      requestHeaders?: GraphQLClientRequestHeaders
    ): Promise<GetTireByIdQuery> {
      return withWrapper(
        (wrappedRequestHeaders) =>
          client.request<GetTireByIdQuery>(GetTireByIdDocument, variables, {
            ...requestHeaders,
            ...wrappedRequestHeaders,
          }),
        "GetTireById",
        "query",
        variables
      );
    },
  };
}
export type Sdk = ReturnType<typeof getSdk>;
