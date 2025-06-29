import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CommentLike } from './comment-likes.entity';
import { Comment } from '../comments/comment.entity';
import { User } from '../users/user.entity';

@Injectable()
export class CommentLikesService {
  constructor(
    @InjectRepository(CommentLike) private likeRepo: Repository<CommentLike>,
    @InjectRepository(Comment) private commentRepo: Repository<Comment>
  ) {}

  async likeComment(commentId: number, user: User): Promise<CommentLike> {
    const comment = await this.commentRepo.findOne({ where: { id: commentId } });
    if (!comment) throw new NotFoundException('Comment not found');

    const existing = await this.likeRepo.findOne({ where: { comment: { id: commentId }, user: { id: user.id } } });
    if (existing) throw new BadRequestException('Already liked');

    const like = this.likeRepo.create({ comment, user });
    return this.likeRepo.save(like);
  }
}
