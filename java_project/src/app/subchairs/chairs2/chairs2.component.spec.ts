import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Chairs2Component } from './chairs2.component';

describe('Chairs2Component', () => {
  let component: Chairs2Component;
  let fixture: ComponentFixture<Chairs2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Chairs2Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Chairs2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
