/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCommentInput {
  text: string;
}

export class CreatePostInput {
  title: string;
  body: string;
}

export class Comment {
  id: string;
  text: string;
}

export abstract class IQuery {
  abstract comments(): Nullable<Comment>[] | Promise<Nullable<Comment>[]>;

  abstract comment(id: string): Nullable<Post> | Promise<Nullable<Post>>;

  abstract posts(): Nullable<Post>[] | Promise<Nullable<Post>[]>;

  abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

export abstract class IMutation {
  abstract createComment(
    createCommentInput?: Nullable<CreateCommentInput>,
  ): Nullable<Comment> | Promise<Nullable<Comment>>;

  abstract createPost(
    createPostInput?: Nullable<CreatePostInput>,
  ): Nullable<Post> | Promise<Nullable<Post>>;
}

export class Post {
  id: string;
  title: string;
  body: string;
}

type Nullable<T> = T | null;
