import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SkuNgModelComponent } from './sku-ng-model.component';

describe('SkuNgModelComponent', () => {
  let component: SkuNgModelComponent;
  let fixture: ComponentFixture<SkuNgModelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SkuNgModelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SkuNgModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
