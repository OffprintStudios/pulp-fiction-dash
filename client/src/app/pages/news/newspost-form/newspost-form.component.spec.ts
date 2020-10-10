import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewspostFormComponent } from './newspost-form.component';

describe('NewspostFormComponent', () => {
  let component: NewspostFormComponent;
  let fixture: ComponentFixture<NewspostFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewspostFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NewspostFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
