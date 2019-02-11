export interface IBaseModel {
  id: number;
  creator: number;
}

export abstract class BaseModel {
  private _id: number;
  private _creator: number;

  protected constructor(data?: IBaseModel) {
    if (data) {
      this.id = data.id;
      this.creator = data.creator;
    }
  }

  get id(): number {
    return this._id;
  }

  set id(value: number) {
    this._id = value;
  }

  get creator(): number {
    return this._creator;
  }

  set creator(value: number) {
    this._creator = value;
  }

  abstract toObject(): IBaseModel;
}
