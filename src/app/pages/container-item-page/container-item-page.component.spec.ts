import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ContainerItemPageComponent } from './container-item-page.component';

describe('ContainerItemPageComponent', () => {
  let component: ContainerItemPageComponent;
  let fixture: ComponentFixture<ContainerItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ContainerItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ContainerItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
