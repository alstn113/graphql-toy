import { Controller, Delete, Get, Query, Res } from '@nestjs/common';
import { Response } from 'express';
import { AuthService, GithubService, GoogleService } from './service';
import { ConfigService } from '@nestjs/config';

@Controller('/auth')
export class AuthController {
  constructor(
    private readonly authService: AuthService,
    private readonly githubService: GithubService,
    private readonly goolgeService: GoogleService,
    private readonly configService: ConfigService,
  ) {}

  @Get()
  test(@Res({ passthrough: true }) res: Response) {
    res.cookie('refresh_token', 'test', {
      maxAge: 1000 * 60 * 60 * 24 * 30, // 30d
      httpOnly: true,
    });
    return 'Hello minsoo, you are always cool';
  }

  @Get('/github')
  signinGithub(@Res({ passthrough: true }) res: Response) {
    const GITHUB_ID = this.configService.get('auth.github.id');
    const REDIRECT_URI = 'http://localhost:8080/auth/github/callback';

    const url = `https://github.com/login/oauth/authorize?scope=user:email&client_id=${GITHUB_ID}&redirect_uri=${REDIRECT_URI}`;

    res.redirect(encodeURI(url));
  }

  @Get('/github/callback')
  async githubCallback(
    @Res({ passthrough: true }) res: Response,
    @Query('code') code: string,
  ) {
    const redirect = this.configService.get<string>('client');
    await this.githubService.githubCallback(res, code);
    res.redirect(encodeURI(redirect));
  }

  // @Get('/goolge')
  // signinGoogle() {
  //   return;
  // }

  // @Get('/google/callback')
  // googleCallback() {
  //   return;
  // }

  @Delete('/logout')
  logout() {
    return;
  }
}
