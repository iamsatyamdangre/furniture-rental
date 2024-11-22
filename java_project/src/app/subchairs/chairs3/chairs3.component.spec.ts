import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chairs3Component } from './chairs3.component';

describe('Chairs3Component', () => {
  let component: Chairs3Component;
  let fixture: ComponentFixture<Chairs3Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chairs3Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chairs3Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
