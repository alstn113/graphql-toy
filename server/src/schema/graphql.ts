/*
 * -------------------------------------------------------
 * THIS FILE WAS AUTOMATICALLY GENERATED (DO NOT MODIFY)
 * -------------------------------------------------------
 */

/* tslint:disable */
/* eslint-disable */
export class CreateCatInput {
  name?: Nullable<string>;
  age?: Nullable<number>;
}

export class PersonInput {
  id?: Nullable<number>;
  email?: Nullable<string>;
  name?: Nullable<string>;
}

export abstract class IQuery {
  abstract cats():
    | Nullable<Nullable<Cat>[]>
    | Promise<Nullable<Nullable<Cat>[]>>;

  abstract cat(id: string): Nullable<Cat> | Promise<Nullable<Cat>>;

  abstract helloWorld(): Nullable<string> | Promise<Nullable<string>>;

  abstract getPerson(): Nullable<Person> | Promise<Nullable<Person>>;
}

export abstract class IMutation {
  abstract createCat(
    createCatInput?: Nullable<CreateCatInput>,
  ): Nullable<Cat> | Promise<Nullable<Cat>>;
}

export class Owner {
  id: number;
  name: string;
  age?: Nullable<number>;
  cats?: Nullable<Cat[]>;
}

export class Cat {
  id?: Nullable<number>;
  name?: Nullable<string>;
  age?: Nullable<number>;
  owner?: Nullable<Owner>;
}

export class Person {
  id?: Nullable<number>;
  email?: Nullable<string>;
  name?: Nullable<string>;
}

type Nullable<T> = T | null;
