import { CreateCatInput } from 'src/schema/graphql';

export class CreateCatDto extends CreateCatInput {
  age: number;
}
