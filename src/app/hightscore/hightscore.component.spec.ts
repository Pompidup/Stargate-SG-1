import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { HightscoreComponent } from './hightscore.component';

describe('HightscoreComponent', () => {
  let component: HightscoreComponent;
  let fixture: ComponentFixture<HightscoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ HightscoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(HightscoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
