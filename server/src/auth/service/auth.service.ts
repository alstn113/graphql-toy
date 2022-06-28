import { Injectable } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { JwtService } from '@nestjs/jwt';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class AuthService {
  constructor(
    private readonly prisma: PrismaService,
    private readonly jwtServcie: JwtService,
    private readonly configServcie: ConfigService,
  ) {}

  async logout() {
    return;
  }

  async refresh() {
    return;
  }

  hashData() {
    return;
  }

  compareData() {
    return;
  }

  getTokens() {
    return;
  }

  updateRtHash() {
    return;
  }

  setTokenCookie() {
    return;
  }

  clearTokenCookie() {
    return;
  }
}
