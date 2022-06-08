import { Post } from 'src/post/entities/post.entity';
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  text: string;

  @Column()
  fk_post_id: string;

  @ManyToOne(() => Post, post => post.comments, {
    onDelete: 'CASCADE',
  })
  @JoinColumn({ name: 'fk_post_id' })
  post: Post;
}
