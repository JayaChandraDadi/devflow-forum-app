import { Entity, PrimaryGeneratedColumn, Column, ManyToOne,OneToMany } from 'typeorm';
import { User } from '../users/user.entity';
import { Comment } from '../comments/comment.entity';
import { PostLike } from '../likes/post-like.entity';
import { Expose, Transform } from 'class-transformer';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  content: string;

  @ManyToOne(() => User, user => user.posts,{ nullable: false })
  user: User;

  @OneToMany(() => Comment, comment => comment.post)
  comments: Comment[];
  @OneToMany(() => PostLike, (like) => like.post)
  likes: PostLike[];
  @Expose()
  @Transform(({ obj }) => obj.likes?.length || 0)
  likeCount: number;
}
