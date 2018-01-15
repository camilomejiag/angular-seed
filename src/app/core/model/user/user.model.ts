export class User {

  constructor(private _firstName: string, private _lastName: string, private _email: string, private _password: string, private _middleName?: string) {
  }

  public get firstName(): string {
    return this._firstName;
  }

  public get lastName(): string {
    return this._lastName;
  }

  public get email(): string {
    return this._email;
  }

  public get password(): string {
    return this._password;
  }

  public get middleName(): string {
    return this._middleName;
  }
}
