import { Module } from '@nestjs/common';
import { CommentService } from './comment.service';
import { CommentResolver } from './comment.resolver';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Comment } from './entities/comment.entity';
import { PostService } from 'src/post/post.service';
import { Post } from 'src/post/entities/post.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Comment, Post])],
  providers: [CommentResolver, CommentService, PostService],
})
export class CommentModule {}
