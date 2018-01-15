export class Category {

  constructor(private _uri: string, private _name?: string, private _link?: string) {
  }

  public get uri(): string {
    return this._uri;
  }

  public get name(): string {
    return this._name;
  }

  public get link(): string {
    return this._link;
  }
}
