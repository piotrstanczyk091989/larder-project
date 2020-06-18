import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LardersPageComponent } from './larders-page.component';

describe('LardersPageComponent', () => {
  let component: LardersPageComponent;
  let fixture: ComponentFixture<LardersPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LardersPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LardersPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
