import { Controller, Param, Post, Req, UseGuards } from '@nestjs/common';
import { CommentLikesService } from './comment-likes.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from '../users/user.entity';

@UseGuards(AuthGuard('jwt'))
@Controller('likes/comments')
export class CommentLikesController {
  constructor(private readonly commentLikesService: CommentLikesService) {}

  @Post(':commentId')
  async like(@Param('commentId') commentId: number, @Req() req: Request) {
    return this.commentLikesService.likeComment(commentId, req.user as User);
  }
}
