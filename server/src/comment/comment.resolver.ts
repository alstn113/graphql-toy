import { Resolver } from '@nestjs/graphql';
import { CommentService } from './comment.service';

@Resolver('Comment')
export class CommentResolver {
  constructor(private readonly commentService: CommentService) {}
}
