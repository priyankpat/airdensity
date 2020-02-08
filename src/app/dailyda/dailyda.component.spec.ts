import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DailydaComponent } from './dailyda.component';

describe('DailydaComponent', () => {
  let component: DailydaComponent;
  let fixture: ComponentFixture<DailydaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DailydaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DailydaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
