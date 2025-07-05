import { Controller, Get, Post, Body } from '@nestjs/common';
import { UsersService } from './user.service';
import { Prisma } from 'generated/prisma';
// import { Prisma } from '../../generated/prisma';

@Controller('user')
export class UserController {
  constructor(private readonly usersService: UsersService) {}

  @Post('signup')
  createUser(@Body() data: Prisma.UserCreateInput) {
    return this.usersService.createUser(data);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.getAllUsers();
  }
}
