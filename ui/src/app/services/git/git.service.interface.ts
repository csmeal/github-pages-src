import { GitProject } from '../../models';

export abstract class IGitService {
  abstract async getProjects(): Promise<GitProject[]>;
}
