import { Comment } from 'src/comment/entities/comment.entity';
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export class Post {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  title: string;

  @Column('text')
  body: string;

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];
}
