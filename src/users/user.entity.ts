import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
} from 'typeorm';
import { Post } from '../posts/posts.entity'; // make sure this path is correct
import { Comment } from '../comments/comment.entity';
import { PostLike } from '../likes/post-like.entity';
import { CommentLike } from '../comment-likes/comment-likes.entity';
@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  email: string;

  @Column()
  password: string;

  @Column({ default: () => 'CURRENT_TIMESTAMP' })
  createdAt: Date;

  @OneToMany(() => Post, (post) => post.user)
  posts: Post[];
  @OneToMany(() => Comment, comment => comment.user)
  comments: Comment[];
  @OneToMany(() => PostLike, (like) => like.user)
  postLikes: PostLike[];
  @OneToMany(() => CommentLike, like => like.user)
  commentLikes: CommentLike[];
  


}
