export class Task {
  static _id = 0;

  constructor(
    public name: string,
    public completed: boolean = false,
    public id: string = '' + Task._id++) {}
}
