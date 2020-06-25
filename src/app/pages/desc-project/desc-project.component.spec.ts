import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DescProjectComponent } from './desc-project.component';

describe('DescProjectComponent', () => {
  let component: DescProjectComponent;
  let fixture: ComponentFixture<DescProjectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DescProjectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DescProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
