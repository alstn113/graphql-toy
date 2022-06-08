import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateCommentInput } from 'src/schema/graphql';
import { Repository } from 'typeorm';
import { Comment } from './entities/comment.entity';

@Injectable()
export class CommentService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepostory: Repository<Comment>,
  ) {}

  async findAll() {
    return await this.commentRepostory.find();
  }

  async findById(id: string) {
    return await this.commentRepostory.findOneByOrFail({ id });
  }

  async findAllById(postId: string) {
    return await this.commentRepostory.find({ where: { fk_post_id: postId } });
  }

  async create(dto: CreateCommentInput) {
    const comment = new Comment();
    comment.text = dto.text;
    comment.fk_post_id = dto.fk_post_id;
    return await this.commentRepostory.save(comment);
  }

  async remove(id: string) {
    const comment = await this.commentRepostory.findOneByOrFail({ id });
    await this.commentRepostory.remove(comment);
    return `Comment id { ${id} } was removed`;
  }
}
