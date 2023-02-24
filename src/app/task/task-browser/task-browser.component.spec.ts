import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TaskBrowserComponent } from './task-browser.component';

describe('TaskBrowserComponent', () => {
  let component: TaskBrowserComponent;
  let fixture: ComponentFixture<TaskBrowserComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TaskBrowserComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TaskBrowserComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
