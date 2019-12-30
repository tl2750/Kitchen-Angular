import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RouteParamComponent } from './route-param.component';

describe('RouteParamComponent', () => {
  let component: RouteParamComponent;
  let fixture: ComponentFixture<RouteParamComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RouteParamComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RouteParamComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
