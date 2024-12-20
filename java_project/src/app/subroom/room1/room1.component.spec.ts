import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Room1Component } from './room1.component';

describe('Room1Component', () => {
  let component: Room1Component;
  let fixture: ComponentFixture<Room1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Room1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Room1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
