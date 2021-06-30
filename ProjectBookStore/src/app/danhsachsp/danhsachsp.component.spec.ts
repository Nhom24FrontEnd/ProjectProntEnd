import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DanhsachspComponent } from './danhsachsp.component';

describe('DanhsachspComponent', () => {
  let component: DanhsachspComponent;
  let fixture: ComponentFixture<DanhsachspComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DanhsachspComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DanhsachspComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
