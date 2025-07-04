import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { HelloModule } from './hello/hello.module';
import { HelloController } from './hello/hello.controller';
import { HelloService } from './hello/hello.service';
import { UserService } from './user/user.service';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';

@Module({
  imports: [HelloModule, UserModule],
  controllers: [AppController, HelloController, UserController],
  providers: [AppService, HelloService, UserService],
})
export class AppModule {}
