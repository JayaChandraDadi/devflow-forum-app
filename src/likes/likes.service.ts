import { Injectable, ConflictException, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { PostLike } from './post-like.entity';
import { Post } from '../posts/posts.entity';
import { User } from '../users/user.entity';

@Injectable()
export class LikesService {
  constructor(
    @InjectRepository(PostLike)
    private readonly postLikeRepo: Repository<PostLike>,

    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>
  ) {}

  async likePost(postId: number, user: User): Promise<string> {
    const post = await this.postRepo.findOne({ where: { id: postId } });
    if (!post) throw new NotFoundException('Post not found');

    const existing = await this.postLikeRepo.findOne({ where: { post: { id: postId }, user: { id: user.id } } });
    if (existing) throw new ConflictException('You already liked this post');

    const like = this.postLikeRepo.create({ post, user });
    await this.postLikeRepo.save(like);

    return 'Post liked';
  }

  async getPostLikes(postId: number): Promise<number> {
    return this.postLikeRepo.count({ where: { post: { id: postId } } });
  }
}
