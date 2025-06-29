import { Controller, Get, UseGuards, Req,Param} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { UsersService } from './users.service'; //
import { User } from '../users/user.entity';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {} // ✅ Inject service
  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  async getProfile(@Req() req: any) {
    const user = req.user as User;
    return this.usersService.getProfile(user.id);
}
  @Get(':id')
  async getUserById(@Param('id') id: number) {
    return this.usersService.getPublicProfileById(+id);
}


}
