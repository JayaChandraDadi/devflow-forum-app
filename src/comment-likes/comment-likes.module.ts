import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentLikesService } from './comment-likes.service';
import { CommentLikesController } from './comment-likes.controller';
import { CommentLike } from './comment-likes.entity';
import { Comment } from '../comments/comment.entity';
import { UsersModule } from '../users/user.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([CommentLike, Comment]),
    UsersModule
  ],
  providers: [CommentLikesService],
  controllers: [CommentLikesController]
})
export class CommentLikesModule {}
