import { Entity, PrimaryGeneratedColumn, ManyToOne, CreateDateColumn } from 'typeorm';
import { User } from '../users/user.entity';
import { Comment } from '../comments/comment.entity';

@Entity()
export class CommentLike {
  @PrimaryGeneratedColumn()
  id: number;

  @ManyToOne(() => User, user => user.commentLikes, { eager: true })
  user: User;

  @ManyToOne(() => Comment, comment => comment.likes)
  comment: Comment;

  @CreateDateColumn()
  createdAt: Date;
}
