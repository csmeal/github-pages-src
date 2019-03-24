import { IGitService } from './git.service.interface';
import { GitProject } from '../../models';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MockGitService implements IGitService {
  projects: GitProject[] = [];
  constructor() {
    this.projects = [
      {
        name: 'Project 1',
        description: 'This is a description, taken from the read me.'
      },
      {
        name: 'Project 2',
        description: 'This is a description, taken from the read me.'
      },
      {
        name: 'Project 3',
        description: 'This is a description, taken from the read me.'
      },
      {
        name: 'Project 4',
        description: 'This is a description, taken from the read me.'
      },
      {
        name: 'Project 5',
        description: 'This is a description, taken from the read me.'
      }
    ];
  }

  async getProjects(): Promise<GitProject[]> {
    return Promise.resolve(this.projects);
  }
}
