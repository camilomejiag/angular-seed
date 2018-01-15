export class Comment {
  constructor(private _owner: string, private _comment: string) {}

  public get owner(): string {
    return this._owner;
  }

  public get comment(): string {
    return this._comment;
  }
}