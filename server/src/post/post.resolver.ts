import { Args, Mutation, Query, Resolver } from '@nestjs/graphql';
import { CreatePostInput } from 'src/schema/graphql';
import { PostService } from './post.service';

@Resolver('Post')
export class PostResolver {
  constructor(private readonly postService: PostService) {}

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
}
