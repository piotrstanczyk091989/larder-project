import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LarderItemPageComponent } from './larder-item-page.component';

describe('LarderItemPageComponent', () => {
  let component: LarderItemPageComponent;
  let fixture: ComponentFixture<LarderItemPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LarderItemPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LarderItemPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
