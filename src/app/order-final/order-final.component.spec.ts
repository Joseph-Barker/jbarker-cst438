import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { OrderFinalComponent } from './order-final.component';

describe('OrderFinalComponent', () => {
  let component: OrderFinalComponent;
  let fixture: ComponentFixture<OrderFinalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ OrderFinalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(OrderFinalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
