import { Controller, Post as HttpPost, Get, Param, UseGuards, Req } from '@nestjs/common';
import { LikesService } from './likes.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';

@UseGuards(AuthGuard('jwt'))
@Controller('likes')
export class LikesController {
  constructor(private readonly likesService: LikesService) {}

  @HttpPost('post/:postId')
  async likePost(@Param('postId') postId: number, @Req() req: Request) {
    const user = req.user as any;
    return this.likesService.likePost(+postId, user);
  }

  @Get('post/:postId')
  async getPostLikes(@Param('postId') postId: number) {
    const count = await this.likesService.getPostLikes(+postId);
    return { postId, likes: count };
  }
}
