import { Homework } from './homework';

export class User {
  public id: number;
  public name: string;
  public surname: string;
  public list: Homework[];
  constructor(name: string, surname: string, list: Homework[]) {
    this.id = Math.random();
    this.name = name;
    this.surname = surname;
    this.list = list;
  }
}
