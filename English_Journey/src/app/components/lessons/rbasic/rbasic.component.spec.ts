import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBasicComponent } from './rbasic.component';

describe('RBasicComponent', () => {
  let component: RBasicComponent;
  let fixture: ComponentFixture<RBasicComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RBasicComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RBasicComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
