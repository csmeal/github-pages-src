declare var require: any;
import { Injectable } from '@angular/core';
import { GitProject } from '../../models';
import { IGitService } from './git.service.interface';
// import * as Octokit from '@octokit/rest';
// ERROR in node_modules/@octokit/rest/index.d.ts(7,23): error TS2307: Cannot find module 'http'.
const Octokit = require('@octokit/rest');

@Injectable({
  providedIn: 'root'
})
export class GitService implements IGitService {
  client: any;
  constructor() {
    this.client = new Octokit();
  }

  async getProjects(): Promise<GitProject[]> {
    const projects = await this.client.repos.listForUser({
      username: 'csmeal'
    });
    console.log(projects);
    return projects.data.map(proj => {
      return {
        name: proj.name,
        description: proj.description || 'None'
      };
    });
    return [];
  }
}
