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

export type Category = {
  __typename?: 'Category';
  id: Scalars['ID']['output'];
  name: Scalars['String']['output'];
  parentCategoryId?: Maybe<Scalars['Int']['output']>;
  productCount: Scalars['Int']['output'];
};

export type Query = {
  __typename?: 'Query';
  mainCategories: Array<Category>;
  subCategories: Array<Category>;
  tire?: Maybe<Tire>;
  tireSpecification?: Maybe<TireSpecification>;
  tires: Array<Tire>;
};


export type QuerySubCategoriesArgs = {
  parentCategoryId: Scalars['Float']['input'];
};


export type QueryTireArgs = {
  id: Scalars['Float']['input'];
};


export type QueryTireSpecificationArgs = {
  id: Scalars['Float']['input'];
};

export type Tire = {
  __typename?: 'Tire';
  brand: Scalars['String']['output'];
  description: Scalars['String']['output'];
  featuresAndBenefits: Array<Scalars['String']['output']>;
  galleryImages: Array<Scalars['String']['output']>;
  id: Scalars['ID']['output'];
  image: Scalars['String']['output'];
  model: Scalars['String']['output'];
  oldPrice: Scalars['Float']['output'];
  price: Scalars['Float']['output'];
  rating: Scalars['Float']['output'];
  sizeIds: Array<Scalars['ID']['output']>;
  sizes: Array<TireSpecification>;
  stock: Scalars['Int']['output'];
};

export type TireSpecification = {
  __typename?: 'TireSpecification';
  aspectRatio: Scalars['String']['output'];
  countryOfOrigin: Scalars['String']['output'];
  id: Scalars['ID']['output'];
  loadIndex: Scalars['String']['output'];
  loadRange: Scalars['String']['output'];
  mpn: Scalars['String']['output'];
  overallDiameter: Scalars['String']['output'];
  performance: Scalars['String']['output'];
  rebateAvailable: Scalars['Boolean']['output'];
  rimDiameter: Scalars['String']['output'];
  roadHazardWarranty: Scalars['Boolean']['output'];
  runFlat: Scalars['Boolean']['output'];
  season: Scalars['String']['output'];
  sectionWidth: Scalars['String']['output'];
  sidewall: Scalars['String']['output'];
  size: Scalars['String']['output'];
  sku: Scalars['String']['output'];
  speedRating: Scalars['String']['output'];
  treadDepth: Scalars['String']['output'];
  type: Scalars['String']['output'];
  utqg: Scalars['String']['output'];
};

export type GetAllMainCategoriesQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllMainCategoriesQuery = { __typename?: 'Query', mainCategories: Array<{ __typename?: 'Category', id: string, name: string, productCount: number, parentCategoryId?: number | null }> };

export type GetSubCategoriesQueryVariables = Exact<{
  parentCategoryId: Scalars['Float']['input'];
}>;


export type GetSubCategoriesQuery = { __typename?: 'Query', subCategories: Array<{ __typename?: 'Category', id: string, name: string, productCount: number, parentCategoryId?: number | null }> };

export type GetTireSpecificationByIdQueryVariables = Exact<{
  tireSpecificationId: Scalars['Float']['input'];
}>;


export type GetTireSpecificationByIdQuery = { __typename?: 'Query', tireSpecification?: { __typename?: 'TireSpecification', aspectRatio: string, countryOfOrigin: string, id: string, loadIndex: string, loadRange: string, mpn: string, overallDiameter: string, performance: string, rebateAvailable: boolean, rimDiameter: string, roadHazardWarranty: boolean, runFlat: boolean, season: string, sectionWidth: string, sidewall: string, size: string, sku: string, speedRating: string, treadDepth: string, type: string, utqg: string } | null };

export type GetAllTiresQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllTiresQuery = { __typename?: 'Query', tires: Array<{ __typename?: 'Tire', id: string, brand: string, model: string, price: number, image: string }> };

export type GetTireByIdQueryVariables = Exact<{
  tireId: Scalars['Float']['input'];
}>;


export type GetTireByIdQuery = { __typename?: 'Query', tire?: { __typename?: 'Tire', id: string, galleryImages: Array<string>, description: string, model: string, oldPrice: number, price: number, rating: number, stock: number, brand: string, featuresAndBenefits: Array<string>, sizes: Array<{ __typename?: 'TireSpecification', size: string, id: string }> } | null };


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
export const GetTireSpecificationByIdDocument = gql`
    query GetTireSpecificationById($tireSpecificationId: Float!) {
  tireSpecification(id: $tireSpecificationId) {
    aspectRatio
    countryOfOrigin
    id
    loadIndex
    loadRange
    mpn
    overallDiameter
    performance
    rebateAvailable
    rimDiameter
    roadHazardWarranty
    runFlat
    season
    sectionWidth
    sidewall
    size
    sku
    speedRating
    treadDepth
    type
    utqg
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
    image
  }
}
    `;
export const GetTireByIdDocument = gql`
    query GetTireById($tireId: Float!) {
  tire(id: $tireId) {
    id
    galleryImages
    description
    model
    oldPrice
    price
    rating
    stock
    brand
    featuresAndBenefits
    sizes {
      size
      id
    }
  }
}
    `;

export type SdkFunctionWrapper = <T>(action: (requestHeaders?:Record<string, string>) => Promise<T>, operationName: string, operationType?: string, variables?: any) => Promise<T>;


const defaultWrapper: SdkFunctionWrapper = (action, _operationName, _operationType, _variables) => action();

export function getSdk(client: GraphQLClient, withWrapper: SdkFunctionWrapper = defaultWrapper) {
  return {
    GetAllMainCategories(variables?: GetAllMainCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllMainCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllMainCategoriesQuery>(GetAllMainCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllMainCategories', 'query', variables);
    },
    GetSubCategories(variables: GetSubCategoriesQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetSubCategoriesQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetSubCategoriesQuery>(GetSubCategoriesDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetSubCategories', 'query', variables);
    },
    GetTireSpecificationById(variables: GetTireSpecificationByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTireSpecificationByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTireSpecificationByIdQuery>(GetTireSpecificationByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTireSpecificationById', 'query', variables);
    },
    GetAllTires(variables?: GetAllTiresQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetAllTiresQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetAllTiresQuery>(GetAllTiresDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetAllTires', 'query', variables);
    },
    GetTireById(variables: GetTireByIdQueryVariables, requestHeaders?: GraphQLClientRequestHeaders): Promise<GetTireByIdQuery> {
      return withWrapper((wrappedRequestHeaders) => client.request<GetTireByIdQuery>(GetTireByIdDocument, variables, {...requestHeaders, ...wrappedRequestHeaders}), 'GetTireById', 'query', variables);
    }
  };
}
export type Sdk = ReturnType<typeof getSdk>;