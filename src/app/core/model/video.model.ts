import {SafeHtml} from '@angular/platform-browser';

export class Video {

  constructor(private _owner: string, private _picture: string, private _link: SafeHtml, private _createDate: string,
              private _description: string, private _title: string, private _uri: string, private _comments?: Comment[]) {
  }

  public get owner(): string {
    return this._owner;
  }

  public get picture(): string {
    return this._picture;
  }

  public get link(): SafeHtml {
    return this._link;
  }

  public get createDate(): string {
    return this._createDate;
  }

  public get description(): string {
    return this._description;
  }

  public get title(): string {
    return this._title;
  }

  public get uri(): string {
    return this._uri;
  }

  public get comments(): Comment[] {
    return this._comments;
  }
}
