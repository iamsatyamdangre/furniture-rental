import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chairs6Component } from './chairs6.component';

describe('Chairs6Component', () => {
  let component: Chairs6Component;
  let fixture: ComponentFixture<Chairs6Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chairs6Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chairs6Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
