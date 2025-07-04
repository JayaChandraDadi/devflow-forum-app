import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { UsersModule } from './users/user.module';
import { AuthModule } from './auth/auth.module';
import { Post } from './posts/posts.entity'; // adjust path
import { PostsModule } from './posts/posts.module'; // adjust path
import { CommentsModule } from './comments/comment.module';
import { LikesModule } from './likes/likes.module';
import { CommentLikesModule } from './comment-likes/comment-likes.module';
@Module({
  imports: [
    ConfigModule.forRoot({ isGlobal: true }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: process.env.DB_HOST,
      port: parseInt(process.env.DB_PORT, 10),
      username: process.env.DB_USERNAME,
      password: process.env.DB_PASSWORD,
      database: process.env.DB_NAME,
      autoLoadEntities: true,
      synchronize: true,
    }),
    UsersModule,
    AuthModule,
    PostsModule,
    CommentsModule,
    LikesModule,
    CommentLikesModule
  ],
})
export class AppModule {}
