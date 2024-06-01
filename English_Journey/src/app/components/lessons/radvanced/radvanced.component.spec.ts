import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RAdvancedComponent } from './radvanced.component';

describe('RAdvancedComponent', () => {
  let component: RAdvancedComponent;
  let fixture: ComponentFixture<RAdvancedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RAdvancedComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RAdvancedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
