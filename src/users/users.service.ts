import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from './user.entity';
import { NotFoundException } from '@nestjs/common';

@Injectable()
export class UsersService {
  constructor(
    @InjectRepository(User)
    private readonly userRepo: Repository<User>,

  ) {}


  async createUser(email: string, password: string): Promise<User> {
    const user = this.userRepo.create({ email, password });
    return this.userRepo.save(user);
  }

  async findByEmail(email: string): Promise<User | undefined> {
    return this.userRepo.findOne({ where: { email } });
  }

  async findById(id: number): Promise<User | undefined> {
    return this.userRepo.findOne({ where: { id } });
  }
  async getProfile(userId: number) {
  return this.userRepo.findOne({
    where: { id: userId },
    relations: ['posts', 'comments', 'postLikes', 'commentLikes'],
  });
}
  async getPublicProfileById(id: number) {
  const user = await this.userRepo.findOne({
    where: { id },
    relations: ['posts', 'comments','postLikes', 'commentLikes'], // Add 'postLikes', 'commentLikes' if needed
  });

  if (!user) throw new NotFoundException('User not found');

  return {
    id: user.id,
    email: user.email,
    createdAt: user.createdAt,
    totalPosts: user.posts.length,
    totalComments: user.comments.length,
    posts: user.posts,             // Include full posts
    comments: user.comments, 
    postLikes: user.postLikes.length,        // Optional: or map to just postId
    commentLikes: user.commentLikes.length,  // Optional: or map to just commentId      // Include full comments
    // Optional:
    // totalPostLikes: user.postLikes.length,
    // totalCommentLikes: user.commentLikes.length
  };
}

  
}
