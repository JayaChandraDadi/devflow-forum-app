import { Controller, Post as HttpPost, Body, Get, UseGuards, Req } from '@nestjs/common';
import { PostsService } from './posts.service';
import { AuthGuard } from '@nestjs/passport';
import { Request } from 'express';
import { User } from '../users/user.entity';

@UseGuards(AuthGuard('jwt'))
@Controller('posts')
export class PostsController {
  constructor(private readonly postsService: PostsService) {}

  @HttpPost()
  async createPost(@Body() body: any, @Req() req: Request) {
    const user = req.user as User; // ✅ Will now include id, email, etc.
    return this.postsService.create(body.title, body.content, user);
  }

  @Get()
  async getAllPosts() {
    return this.postsService.findAll();
  }
}
