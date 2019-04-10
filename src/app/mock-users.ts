import { User } from './user';
import { Homework } from './homework';

export const USERS: User[] = [
  new User('Ivan', 'Ivanov', [
    new Homework('AAA', 'aaa', true),
    new Homework('BBB', 'bbb', true),
    new Homework('BBB', 'ccc', true)
  ]),
  new User('Petr', 'Petrov', [
    new Homework('AAA', 'aaa', false),
    new Homework('BBB', 'bbb', true),
    new Homework('BBB', 'ccc', false)
  ]),
  new User('Alexey', 'Alexeev', [
    new Homework('AAA', 'aaa', true),
    new Homework('BBB', 'bbb', true),
    new Homework('BBB', 'ccc', true)
  ]),
  new User('Denis', 'Jackson', [
    new Homework('AAA', 'aaa', true),
    new Homework('BBB', 'bbb', true),
    new Homework('BBB', 'ccc', true)
  ])
];
