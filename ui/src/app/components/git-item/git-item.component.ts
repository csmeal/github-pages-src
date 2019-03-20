import { Component, Input } from '@angular/core';
import { GitProject } from 'src/app/models';

@Component({
  selector: 'app-git-item',
  templateUrl: './git-item.component.html',
  styleUrls: ['./git-item.component.sass']
})
export class GitItemComponent {
  @Input() project: GitProject;

  constructor() {}
}
