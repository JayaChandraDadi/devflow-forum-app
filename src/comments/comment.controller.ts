import {
  Controller,
  Post as HttpPost,
  Get,
  Param,
  Body,
  Req,
  UseGuards,
} from '@nestjs/common';
import { CommentsService } from './comment.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('comments')
export class CommentsController {
  constructor(private readonly commentsService: CommentsService) {}

  @HttpPost(':postId')
  async addComment(
    @Param('postId') postId: number,
    @Body('content') content: string,
    @Req() req: Request,
  ) {
    const user = req.user as any;
    return this.commentsService.create(content, +postId, user);
  }

  @Get(':postId')
  async getComments(@Param('postId') postId: number) {
    return this.commentsService.findByPost(+postId);
  }
}
