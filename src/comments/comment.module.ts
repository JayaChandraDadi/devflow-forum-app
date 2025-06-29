import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { CommentsService } from './comment.service';
import { CommentsController } from './comment.controller';
import { Comment } from './comment.entity';
import { UsersModule } from '../users/user.module';
import { PostsModule } from '../posts/posts.module';
import { Post } from '../posts/posts.entity';
@Module({
  imports: [
    TypeOrmModule.forFeature([Comment, Post]),
    UsersModule,
    PostsModule
  ],
  providers: [CommentsService],
  controllers: [CommentsController],
})
export class CommentsModule {}
