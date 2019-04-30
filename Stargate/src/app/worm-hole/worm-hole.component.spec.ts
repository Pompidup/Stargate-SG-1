import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WormHoleComponent } from './worm-hole.component';

describe('WormHoleComponent', () => {
  let component: WormHoleComponent;
  let fixture: ComponentFixture<WormHoleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WormHoleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WormHoleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
