import type { Category } from '../../../constants';
import { DockerDatasource } from '../../datasource/docker';
export { extractPackageFile } from '../helm-values/extract';

export const defaultConfig = {
  commitMessageTopic: 'piper configuration {{depName}}',
  fileMatch: ['^\\.pipeline/config\\.ya?ml$'],
  pinDigests: false,
};

export const categories: Category[] = ['ci'];

export const supportedDatasources = [DockerDatasource.id];
