import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StudyyComponent } from './studyy.component';

describe('StudyyComponent', () => {
  let component: StudyyComponent;
  let fixture: ComponentFixture<StudyyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [StudyyComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(StudyyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
