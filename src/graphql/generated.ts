import { GraphQLClient, RequestOptions } from 'graphql-request';
import gql from 'graphql-tag';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
export type MakeEmpty<T extends { [key: string]: unknown }, K extends keyof T> = { [_ in K]?: never };
export type Incremental<T> = T | { [P in keyof T]?: P extends ' $fragmentName' | '__typename' ? T[P] : never };
type GraphQLClientRequestHeaders = RequestOptions['requestHeaders'];
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: { input: string; output: string; }
  String: { input: string; output: string; }
  Boolean: { input: boolean; output: boolean; }
  Int: { input: number; output: number; }
  Float: { input: number; output: number; }
};

export type Query = {
  __typename?: 'Query';
  tire?: Maybe<Tire>;
  tires: Array<Tire>;
};


export type QueryTireArgs = {
  id: Scalars['Float']['input'];
};

export type Tire = {
  __typename?: 'Tire';
  brand: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  model: Scalars['String']['output'];
  price: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  size: Scalars['String']['output'];
  stock: Scalars['Int']['output'];
  type: Scalars['String']['output'];
};

export type GetAllTiresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTiresQuery = { __typename?: 'Query', tires: Array<{ __typename?: 'Tire', id: string, brand: string, model: string, price: number, rating: number, size: string, stock: number, type: string }> };

export type GetTireByIdQueryVariables = Exact<{
  tireId: Scalars['Float']['input'];
}>;


export type GetTireByIdQuery = { __typename?: 'Query', tire?: { __typename?: 'Tire', id: string, brand: string, model: string, price: number, rating: number, size: string, stock: number, type: string } | null };


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

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllTires(variables?: GetAllTiresQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllTiresQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllTiresQuery>(GetAllTiresDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllTires', 'query', variables);
    },
    GetTireById(variables: GetTireByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTireByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTireByIdQuery>(GetTireByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTireById', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;