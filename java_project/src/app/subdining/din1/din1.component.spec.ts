import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Din1Component } from './din1.component';

describe('Din1Component', () => {
  let component: Din1Component;
  let fixture: ComponentFixture<Din1Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Din1Component]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Din1Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
