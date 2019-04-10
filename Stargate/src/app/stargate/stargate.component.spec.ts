import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StargateComponent } from './stargate.component';

describe('StargateComponent', () => {
  let component: StargateComponent;
  let fixture: ComponentFixture<StargateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StargateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StargateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
