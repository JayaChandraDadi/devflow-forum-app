import { Entity, PrimaryGeneratedColumn, ManyToOne, Unique } from 'typeorm';
import { User } from '../users/user.entity';
import { Post } from '../posts/posts.entity';

@Entity()
@Unique(['user', 'post']) // ✅ Prevent duplicate likes
export class PostLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.postLikes)
  user: User;

  @ManyToOne(() => Post, post => post.likes, { onDelete: 'CASCADE' })
  post: Post;
}
