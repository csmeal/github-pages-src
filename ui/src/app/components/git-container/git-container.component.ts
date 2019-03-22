import { Component, OnInit } from '@angular/core';
import { GitProject } from '../../models';
import { IGitService } from '../../services';

@Component({
  selector: 'app-git-container',
  templateUrl: './git-container.component.html',
  styleUrls: ['./git-container.component.sass']
})
export class GitContainerComponent implements OnInit {
  projects: GitProject[];

  constructor(private gitService: IGitService) {}

  ngOnInit() {
    this.projects = this.gitService.getProjects();
    console.log(this.gitService);
    console.log(this.projects);
  }
}
