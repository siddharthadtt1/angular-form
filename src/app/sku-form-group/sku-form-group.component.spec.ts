import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuFormGroupComponent } from './sku-form-group.component';

describe('SkuFormGroupComponent', () => {
  let component: SkuFormGroupComponent;
  let fixture: ComponentFixture<SkuFormGroupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuFormGroupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuFormGroupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
