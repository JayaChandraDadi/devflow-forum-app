import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Comment } from './comment.entity';
import { Post } from '../posts/posts.entity';
import { User } from '../users/user.entity';

@Injectable()
export class CommentsService {
  constructor(
    @InjectRepository(Comment)
    private readonly commentRepo: Repository<Comment>,

    @InjectRepository(Post)
    private readonly postRepo: Repository<Post>,
  ) {}

  async create(content: string, postId: number, user: User): Promise<Comment> {
    const post = await this.postRepo.findOne({ where: { id: postId } });
    if (!post) throw new Error('Post not found');

    const comment = this.commentRepo.create({ content, post, user });
    return this.commentRepo.save(comment);
  }

  async findByPost(postId: number): Promise<Comment[]> {
    return this.commentRepo.find({
      where: { post: { id: postId } },
      relations: ['user', 'post'],
    });
  }
}
