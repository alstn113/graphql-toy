
/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCommentInput {
    text: string;
    fk_post_id: string;
}

export class CreatePostInput {
    title: string;
    body: string;
}

export class Comment {
    id: string;
    text: string;
    fk_post_id: string;
    post: Post;
    createdAt?: Nullable<DateTime>;
}

export abstract class IQuery {
    abstract comments(): Nullable<Nullable<Comment>[]> | Promise<Nullable<Nullable<Comment>[]>>;

    abstract comment(id: string): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract posts(): Nullable<Nullable<Post>[]> | Promise<Nullable<Nullable<Post>[]>>;

    abstract post(id: string): Nullable<Post> | Promise<Nullable<Post>>;
}

export abstract class IMutation {
    abstract createComment(createCommentInput?: Nullable<CreateCommentInput>): Nullable<Comment> | Promise<Nullable<Comment>>;

    abstract deleteComment(id: string): Nullable<string> | Promise<Nullable<string>>;

    abstract createPost(createPostInput?: Nullable<CreatePostInput>): Nullable<Post> | Promise<Nullable<Post>>;

    abstract deletePost(id: string): Nullable<string> | Promise<Nullable<string>>;
}

export class Post {
    id: string;
    title: string;
    body: string;
    comments?: Nullable<Nullable<Comment>[]>;
    createdAt?: Nullable<DateTime>;
}

export type DateTime = any;
type Nullable<T> = T | null;
