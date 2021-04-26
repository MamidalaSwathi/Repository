import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DetailedWeatherComponentComponent } from './detailed-weather-component.component';

describe('DetailedWeatherComponentComponent', () => {
  let component: DetailedWeatherComponentComponent;
  let fixture: ComponentFixture<DetailedWeatherComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetailedWeatherComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DetailedWeatherComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
