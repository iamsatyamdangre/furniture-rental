import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chairs4Component } from './chairs4.component';

describe('Chairs4Component', () => {
  let component: Chairs4Component;
  let fixture: ComponentFixture<Chairs4Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chairs4Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chairs4Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
