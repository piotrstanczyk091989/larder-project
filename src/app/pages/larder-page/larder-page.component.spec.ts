import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LarderPageComponent } from './larder-page.component';

describe('LarderPageComponent', () => {
  let component: LarderPageComponent;
  let fixture: ComponentFixture<LarderPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LarderPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LarderPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
