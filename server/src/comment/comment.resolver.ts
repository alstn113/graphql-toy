import { Args, Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';
import { Query, Mutation } from '@nestjs/graphql';
import { CreateCommentInput } from 'src/schema/graphql';
@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}

  @Query('comments')
  async getComments() {
    return await this.commentService.findAll();
  }

  @Query('comment')
  async getComment(@Args('id') id: string) {
    return await this.commentService.findById(id);
  }

  @Mutation('createComment')
  async createComment(@Args('createCommentInput') args: CreateCommentInput) {
    const createdComment = await this.commentService.create(args);
    return createdComment;
  }

  @Mutation('removeComment')
  async removeComment(@Args('id') id: string) {
    return await this.commentService.remove(id);
  }
}
