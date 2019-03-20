import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitItemComponent } from './git-item.component';

describe('GitItemComponent', () => {
  let component: GitItemComponent;
  let fixture: ComponentFixture<GitItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
