import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VRobotsComponent } from './vrobots.component';

describe('VRobotsComponent', () => {
  let component: VRobotsComponent;
  let fixture: ComponentFixture<VRobotsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VRobotsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VRobotsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
