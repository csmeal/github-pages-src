import { Component, OnInit } from '@angular/core';
import { GitProject } from '../../models';
import { GitService } from '../../services';

@Component({
  selector: 'app-git-container',
  templateUrl: './git-container.component.html',
  styleUrls: ['./git-container.component.sass']
})
export class GitContainerComponent implements OnInit {
  projects: GitProject[];

  constructor(private gitService: GitService) {}

  ngOnInit() {}
}
