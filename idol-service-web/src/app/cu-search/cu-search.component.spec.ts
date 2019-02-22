import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CuSearchComponent } from './cu-search.component';

describe('CuSearchComponent', () => {
  let component: CuSearchComponent;
  let fixture: ComponentFixture<CuSearchComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CuSearchComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CuSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
