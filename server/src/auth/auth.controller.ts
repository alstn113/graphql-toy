import { Controller, Delete, Get, Res } from '@nestjs/common';
import { AuthService } from './auth.service';
import { Response } from 'express';

@Controller('/auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Get()
  test(@Res({ passthrough: true }) res: Response) {
    res.cookie('refresh_token', 'test', {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30d
      httpOnly: true,
    });
    return 'Hello minsoo, you are always cool';
  }

  @Get('/goolge/callback')
  googleCallback() {
    return;
  }

  @Get('/github/callback')
  githubCallback() {
    return;
  }

  @Get('/google/redirect')
  googleRedirect() {
    return;
  }

  @Get('/github/redirect')
  githubRedirect() {
    return;
  }

  @Delete('/logout')
  logout() {
    return;
  }
}
