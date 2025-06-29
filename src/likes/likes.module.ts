import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { PostLike } from './post-like.entity';
import { LikesService } from './likes.service';
import { LikesController } from './likes.controller';
import { Post } from '../posts/posts.entity';
import { User } from '../users/user.entity';

@Module({
  imports: [TypeOrmModule.forFeature([PostLike, Post, User])],
  controllers: [LikesController],
  providers: [LikesService],
})
export class LikesModule {}
