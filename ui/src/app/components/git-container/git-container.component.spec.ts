import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitContainerComponent } from './git-container.component';

describe('GitContainerComponent', () => {
  let component: GitContainerComponent;
  let fixture: ComponentFixture<GitContainerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitContainerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
