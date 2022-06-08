import {
  Args,
  Mutation,
  Parent,
  Query,
  ResolveField,
  Resolver,
} from '@nestjs/graphql';
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
  async getPosts() {
    return await this.postService.findAll();
  }

  @Query('post')
  async getPost(@Args('id') id: string) {
    return await this.postService.findById(id);
  }

  @Mutation('createPost')
  async createPost(@Args('createPostInput') args: CreatePostInput) {
    const createdPost = await this.postService.create(args);
    return createdPost;
  }

  @Mutation('removePost')
  async removePost(@Args('id') id: string) {
    return await this.postService.remove(id);
  }

  @ResolveField()
  async comments(@Parent() post: Post) {
    return this.commentService.findAllById(post.id);
  }
}
