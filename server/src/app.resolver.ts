import { Query, Resolver } from '@nestjs/graphql';
import { Person } from './schema/graphql';

@Resolver()
export class AppResolver {
  @Query()
  helloWorld() {
    return 'Hello World';
  }

  @Query()
  getPerson(): Person {
    return {
      id: 1,
      email: 'asdf',
      name: 'Asdf',
    };
  }
}
