import { ComponentFixture, TestBed, waitForAsync } from '@angular/core/testing';

import { DetailProductsComponent } from './detail-products.component';

describe('DetailProductsComponent', () => {
  let component: DetailProductsComponent;
  let fixture: ComponentFixture<DetailProductsComponent>;

  beforeEach(waitForAsync(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailProductsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
