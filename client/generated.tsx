import { gql } from '@apollo/client';
import * as Apollo from '@apollo/client';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
const defaultOptions = {} as const;
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

export type PostsQueryVariables = Exact<{ [key: string]: never; }>;


export type PostsQuery = { __typename?: 'Query', posts?: Array<{ __typename?: 'Post', id: string, title: string, body: string, comments?: Array<{ __typename?: 'Comment', id: string, text: string } | null> | null } | null> | null };


export const PostsDocument = gql`
    query Posts {
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

/**
 * __usePostsQuery__
 *
 * To run a query within a React component, call `usePostsQuery` and pass it any options that fit your needs.
 * When your component renders, `usePostsQuery` returns an object from Apollo Client that contains loading, error, and data properties
 * you can use to render your UI.
 *
 * @param baseOptions options that will be passed into the query, supported options are listed on: https://www.apollographql.com/docs/react/api/react-hooks/#options;
 *
 * @example
 * const { data, loading, error } = usePostsQuery({
 *   variables: {
 *   },
 * });
 */
export function usePostsQuery(baseOptions?: Apollo.QueryHookOptions<PostsQuery, PostsQueryVariables>) {
        const options = {...defaultOptions, ...baseOptions}
        return Apollo.useQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
      }
export function usePostsLazyQuery(baseOptions?: Apollo.LazyQueryHookOptions<PostsQuery, PostsQueryVariables>) {
          const options = {...defaultOptions, ...baseOptions}
          return Apollo.useLazyQuery<PostsQuery, PostsQueryVariables>(PostsDocument, options);
        }
export type PostsQueryHookResult = ReturnType<typeof usePostsQuery>;
export type PostsLazyQueryHookResult = ReturnType<typeof usePostsLazyQuery>;
export type PostsQueryResult = Apollo.QueryResult<PostsQuery, PostsQueryVariables>;