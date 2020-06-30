import { Model, BuildOptions } from 'sequelize';
export interface IUsersAttributes {
  id: number,
  name: string,
  createdAt: Date,
  updatedAt: Date,
}
export interface IUsersModel extends IUsersAttributes, Model {}
export type IUsersModelStatic = typeof Model & {
  new (values?: object, options?: BuildOptions): IUsersModel;
};