import { Injectable, OnModuleDestroy, OnModuleInit } from '@nestjs/common';
import { withOptimize } from '@prisma/extension-optimize';
import { PrismaClient } from 'generated/prisma';

@Injectable()
export class PrismaService
  extends PrismaClient
  implements OnModuleInit, OnModuleDestroy
{
  constructor() {
    super();

    // Extend Prisma Client with Optimize
    this.$extends(
      withOptimize({
        apiKey: process.env.OPTIMIZE_API_KEY || '',
      }),
    );
  }
  async onModuleInit() {
    await this.$connect();
  }
  async onModuleDestroy() {
    await this.$disconnect();
  }
}
