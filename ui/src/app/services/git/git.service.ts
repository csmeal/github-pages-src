import { Injectable } from '@angular/core';
import { GitProject } from '../../models';
import { IGitService } from './git.service.interface';

@Injectable({
  providedIn: 'root'
})
export class GitService implements IGitService {
  constructor() {}

  getProjects(): GitProject[] {
    return [];
  }
}
