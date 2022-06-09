import { GraphQLClient } from 'graphql-request';
import { RequestInit } from 'graphql-request/dist/types.dom';
import { useQuery, useMutation, UseQueryOptions, UseMutationOptions } from 'react-query';
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
  comment?: Maybe<Comment>;
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

export type GetAllCommentsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllCommentsQuery = { __typename?: 'Query', comments?: Array<{ __typename?: 'Comment', id: string, text: string } | null> | null };

export type GetCommentByIdQueryVariables = Exact<{
  id: Scalars['String'];
}>;


export type GetCommentByIdQuery = { __typename?: 'Query', comment?: { __typename?: 'Comment', id: string, text: string } | null };

export type CreateCommentMutationVariables = Exact<{
  createCommentInput?: InputMaybe<CreateCommentInput>;
}>;


export type CreateCommentMutation = { __typename?: 'Mutation', createComment?: { __typename?: 'Comment', id: string, text: string } | null };

export type RemoveCommentMutationVariables = Exact<{
  removeCommentId: Scalars['String'];
}>;


export type RemoveCommentMutation = { __typename?: 'Mutation', removeComment?: string | null };

export type GetAllPostsQueryVariables = Exact<{ [key: string]: never; }>;


export type GetAllPostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title: string, body: string, comments?: Array<{ __typename?: 'Comment', id: string, text: string, fk_post_id: string } | null> | null } | null> | null };

export type GetPostByIdQueryVariables = Exact<{
  postId: Scalars['String'];
}>;


export type GetPostByIdQuery = { __typename?: 'Query', post?: { __typename?: 'Post', id: string, title: string, body: string, comments?: Array<{ __typename?: 'Comment', id: string, text: string, fk_post_id: string } | null> | null } | null };

export type CreatePostMutationVariables = Exact<{
  createPostInput: CreatePostInput;
}>;


export type CreatePostMutation = { __typename?: 'Mutation', createPost?: { __typename?: 'Post', id: string, title: string, body: string } | null };

export type RemovePostMutationVariables = Exact<{
  removePostId: Scalars['String'];
}>;


export type RemovePostMutation = { __typename?: 'Mutation', removePost?: string | null };


export const GetAllCommentsDocument = `
    query GetAllComments {
  comments {
    id
    text
  }
}
    `;
export const useGetAllCommentsQuery = <
      TData = GetAllCommentsQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables?: GetAllCommentsQueryVariables,
      options?: UseQueryOptions<GetAllCommentsQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetAllCommentsQuery, TError, TData>(
      variables === undefined ? ['GetAllComments'] : ['GetAllComments', variables],
      fetcher<GetAllCommentsQuery, GetAllCommentsQueryVariables>(client, GetAllCommentsDocument, variables, headers),
      options
    );
export const GetCommentByIdDocument = `
    query GetCommentById($id: String!) {
  comment(id: $id) {
    id
    text
  }
}
    `;
export const useGetCommentByIdQuery = <
      TData = GetCommentByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetCommentByIdQueryVariables,
      options?: UseQueryOptions<GetCommentByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetCommentByIdQuery, TError, TData>(
      ['GetCommentById', variables],
      fetcher<GetCommentByIdQuery, GetCommentByIdQueryVariables>(client, GetCommentByIdDocument, variables, headers),
      options
    );
export const CreateCommentDocument = `
    mutation createComment($createCommentInput: CreateCommentInput) {
  createComment(createCommentInput: $createCommentInput) {
    id
    text
  }
}
    `;
export const useCreateCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreateCommentMutation, TError, CreateCommentMutationVariables, TContext>(
      ['createComment'],
      (variables?: CreateCommentMutationVariables) => fetcher<CreateCommentMutation, CreateCommentMutationVariables>(client, CreateCommentDocument, variables, headers)(),
      options
    );
export const RemoveCommentDocument = `
    mutation removeComment($removeCommentId: String!) {
  removeComment(id: $removeCommentId)
}
    `;
export const useRemoveCommentMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RemoveCommentMutation, TError, RemoveCommentMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RemoveCommentMutation, TError, RemoveCommentMutationVariables, TContext>(
      ['removeComment'],
      (variables?: RemoveCommentMutationVariables) => fetcher<RemoveCommentMutation, RemoveCommentMutationVariables>(client, RemoveCommentDocument, variables, headers)(),
      options
    );
export const GetAllPostsDocument = `
    query GetAllPosts {
  posts {
    id
    title
    body
    comments {
      id
      text
      fk_post_id
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
export const GetPostByIdDocument = `
    query GetPostById($postId: String!) {
  post(id: $postId) {
    id
    title
    body
    comments {
      id
      text
      fk_post_id
    }
  }
}
    `;
export const useGetPostByIdQuery = <
      TData = GetPostByIdQuery,
      TError = unknown
    >(
      client: GraphQLClient,
      variables: GetPostByIdQueryVariables,
      options?: UseQueryOptions<GetPostByIdQuery, TError, TData>,
      headers?: RequestInit['headers']
    ) =>
    useQuery<GetPostByIdQuery, TError, TData>(
      ['GetPostById', variables],
      fetcher<GetPostByIdQuery, GetPostByIdQueryVariables>(client, GetPostByIdDocument, variables, headers),
      options
    );
export const CreatePostDocument = `
    mutation createPost($createPostInput: CreatePostInput!) {
  createPost(createPostInput: $createPostInput) {
    id
    title
    body
  }
}
    `;
export const useCreatePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<CreatePostMutation, TError, CreatePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<CreatePostMutation, TError, CreatePostMutationVariables, TContext>(
      ['createPost'],
      (variables?: CreatePostMutationVariables) => fetcher<CreatePostMutation, CreatePostMutationVariables>(client, CreatePostDocument, variables, headers)(),
      options
    );
export const RemovePostDocument = `
    mutation removePost($removePostId: String!) {
  removePost(id: $removePostId)
}
    `;
export const useRemovePostMutation = <
      TError = unknown,
      TContext = unknown
    >(
      client: GraphQLClient,
      options?: UseMutationOptions<RemovePostMutation, TError, RemovePostMutationVariables, TContext>,
      headers?: RequestInit['headers']
    ) =>
    useMutation<RemovePostMutation, TError, RemovePostMutationVariables, TContext>(
      ['removePost'],
      (variables?: RemovePostMutationVariables) => fetcher<RemovePostMutation, RemovePostMutationVariables>(client, RemovePostDocument, variables, headers)(),
      options
    );