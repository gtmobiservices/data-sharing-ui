import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TimelineMapComponent } from './timeline-map.component';

describe('TimelineMapComponent', () => {
  let component: TimelineMapComponent;
  let fixture: ComponentFixture<TimelineMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TimelineMapComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TimelineMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
