import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthController } from './auth.controller';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  controllers: [AuthController],
  providers: [PrismaService, AuthService, AuthResolver],
})
export class AuthModule {}
