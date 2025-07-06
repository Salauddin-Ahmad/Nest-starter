import { Controller, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { CreateUserDto } from './dto/createUser.dto';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  createUser(@Body() data: CreateUserDto) {
    return this.usersService.createUser(data);
  }

  // @Get()
  // async getAllUsers() {
  //   return this.usersService.getAllUsers();
  // }
}
