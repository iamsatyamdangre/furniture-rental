import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chairs5Component } from './chairs5.component';

describe('Chairs5Component', () => {
  let component: Chairs5Component;
  let fixture: ComponentFixture<Chairs5Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chairs5Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chairs5Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
