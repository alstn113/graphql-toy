import { Resolver } from '@nestjs/graphql';
import { AuthService } from './service/auth.service';

@Resolver('Auth')
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
}
