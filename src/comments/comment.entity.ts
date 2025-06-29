import { Entity, PrimaryGeneratedColumn, Column, ManyToOne ,OneToMany} from 'typeorm';
import { User } from '../users/user.entity';
import { Post } from '../posts/posts.entity';
import { CommentLike } from '../comment-likes/comment-likes.entity';
import { Expose, Transform } from 'class-transformer';

@Entity()
export class Comment {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  content: string;

  @ManyToOne(() => User, user => user.comments)
  user: User;

  @ManyToOne(() => Post, post => post.comments)
  post: Post;

  @OneToMany(() => CommentLike, like => like.comment)
    likes: CommentLike[];
  @Expose()
  @Transform(({ obj }) => obj.likes?.length || 0)
likeCount: number;  
}
