import { GitProject } from '../../models';

export abstract class IGitService {
  abstract getProjects(): GitProject[];
}
