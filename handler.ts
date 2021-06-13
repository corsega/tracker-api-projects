import 'source-map-support/register';
import { AppSyncResolverEvent, AppSyncResolverHandler } from 'aws-lambda';
import getProjectList, { GetProjectListError } from './src/getProjectList';

export const listProjects: AppSyncResolverHandler<any, any> = async (event: AppSyncResolverEvent<any>) => {
  try {
    return await getProjectList({})
  } catch (error) {
    console.log(error)    
    throw new GetProjectListError(`Error getting projects.`)
  }
}
