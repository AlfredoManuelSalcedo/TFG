import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RFastComponent } from './rfast.component';

describe('RFastComponent', () => {
  let component: RFastComponent;
  let fixture: ComponentFixture<RFastComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RFastComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RFastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
