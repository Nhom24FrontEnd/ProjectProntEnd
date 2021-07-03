import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhmuclefterComponent } from './danhmuclefter.component';

describe('DanhmuclefterComponent', () => {
  let component: DanhmuclefterComponent;
  let fixture: ComponentFixture<DanhmuclefterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhmuclefterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhmuclefterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
