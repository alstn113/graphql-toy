import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, UseQueryOptions } from 'react-query';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };

function fetcher<TData, TVariables>(client: GraphQLClient, query: string, variables?: TVariables, headers?: RequestInit['headers']) {
  return async (): Promise<TData> => client.request<TData, TVariables>(query, variables, headers);
}
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  fk_post_id: Scalars['String'];
  id: Scalars['ID'];
  post: Post;
  text: Scalars['String'];
};

export type CreateCommentInput = {
  fk_post_id: Scalars['String'];
  text: Scalars['String'];
};

export type CreatePostInput = {
  body: Scalars['String'];
  title: Scalars['String'];
};

export type Mutation = {
  __typename?: 'Mutation';
  createComment?: Maybe<Comment>;
  createPost?: Maybe<Post>;
  removeComment?: Maybe<Scalars['String']>;
  removePost?: Maybe<Scalars['String']>;
};


export type MutationCreateCommentArgs = {
  createCommentInput?: InputMaybe<CreateCommentInput>;
};


export type MutationCreatePostArgs = {
  createPostInput?: InputMaybe<CreatePostInput>;
};


export type MutationRemoveCommentArgs = {
  id: Scalars['String'];
};


export type MutationRemovePostArgs = {
  id: Scalars['String'];
};

export type Post = {
  __typename?: 'Post';
  body: Scalars['String'];
  comments?: Maybe<Array<Maybe<Comment>>>;
  id: Scalars['ID'];
  title: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  comment?: Maybe<Post>;
  comments?: Maybe<Array<Maybe<Comment>>>;
  post?: Maybe<Post>;
  posts?: Maybe<Array<Maybe<Post>>>;
};


export type QueryCommentArgs = {
  id: Scalars['String'];
};


export type QueryPostArgs = {
  id: Scalars['String'];
};

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title: string, body: string, comments?: Array<{ __typename?: 'Comment', id: string, text: string } | null> | null } | null> | null };


export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    id
    title
    body
    comments {
      id
      text
    }
  }
}
    `;
export const useGetAllPostsQuery = <
      TData = GetAllPostsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllPostsQueryVariables,
      options?: UseQueryOptions<GetAllPostsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllPostsQuery, TError, TData>(
      variables === undefined ? ['GetAllPosts'] : ['GetAllPosts', variables],
      fetcher<GetAllPostsQuery, GetAllPostsQueryVariables>(client, GetAllPostsDocument, variables, headers),
      options
    );