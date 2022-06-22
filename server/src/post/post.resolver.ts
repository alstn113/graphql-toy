import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
import { Prisma } from '@prisma/client';
import { CommentService } from 'src/comment/comment.service';
import { CreatePostInput, Post } from 'src/schema/graphql';
import { PostService } from './post.service';

@Resolver('Post')
export class PostResolver {
  constructor(
    private readonly postService: PostService,
    private readonly commentService: CommentService,
  ) {}

  @Query('posts')
  getPosts() {
    return this.postService.findAll();
  }

  @Query('post')
  getPost(@Args('id') id: string) {
    return this.postService.findById({ id });
  }

  @Mutation('createPost')
  createPost(@Args('createPostInput') args: Prisma.PostCreateInput) {
    return this.postService.create(args);
  }

  @Mutation('removePost')
  removePost(@Args('id') id: string) {
    // return await this.postService.remove(id);
  }

  @ResolveField()
  comments(@Parent() post: Post) {
    // return this.commentService.findAllById(post.id);
  }
}
