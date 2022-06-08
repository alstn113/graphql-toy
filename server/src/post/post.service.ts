import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreatePostInput } from 'src/schema/graphql';
import { Repository } from 'typeorm';
import { Post } from './entities/post.entity';

@Injectable()
export class PostService {
  constructor(
    @InjectRepository(Post)
    private readonly postRepostory: Repository<Post>,
  ) {}

  async findAll() {
    return await this.postRepostory.find();
  }

  async findById(id: string) {
    return await this.postRepostory.findOneByOrFail({ id });
  }

  async create(dto: CreatePostInput) {
    const post = new Post();
    post.title = dto.title;
    post.body = dto.body;
    return await this.postRepostory.save(post);
  }

  async remove(id: string) {
    const post = await this.postRepostory.findOneByOrFail({ id });
    await this.postRepostory.remove(post);
    return `Post id { ${id} } was removed`;
  }
}
