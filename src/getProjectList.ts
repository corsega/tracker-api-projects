import { CustomError } from 'ts-custom-error'
import data from './data'

export class GetProjectListError extends CustomError {}

export interface IGetProjectListInput {
  // workspaceId: string
} 

export default async (input: IGetProjectListInput) => {
  // throw Error()
  return {
    data,
  }
}