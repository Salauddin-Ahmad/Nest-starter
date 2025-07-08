import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { PrismaModule } from './prisma/prisma.module';
import { BlogModule } from './blog/blog.module';

@Module({
  imports: [UserModule, PrismaModule, BlogModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
