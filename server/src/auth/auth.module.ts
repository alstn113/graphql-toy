import { Module } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { AuthResolver } from './auth.resolver';
import { AuthService } from './auth.service';

@Module({
  providers: [PrismaService, AuthService, AuthResolver],
})
export class AuthModule {}
