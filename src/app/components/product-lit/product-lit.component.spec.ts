import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductLitComponent } from './product-lit.component';

describe('ProductLitComponent', () => {
  let component: ProductLitComponent;
  let fixture: ComponentFixture<ProductLitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ProductLitComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ProductLitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
