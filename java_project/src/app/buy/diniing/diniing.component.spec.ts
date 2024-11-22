import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DiniingComponent } from './diniing.component';

describe('DiniingComponent', () => {
  let component: DiniingComponent;
  let fixture: ComponentFixture<DiniingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DiniingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DiniingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
