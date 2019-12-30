import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProviderKitchenComponent } from './provider-kitchen.component';

describe('ProviderKitchenComponent', () => {
  let component: ProviderKitchenComponent;
  let fixture: ComponentFixture<ProviderKitchenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProviderKitchenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProviderKitchenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
