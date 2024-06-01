import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RIntermediateComponent } from './rintermediate.component';

describe('RIntermediateComponent', () => {
  let component: RIntermediateComponent;
  let fixture: ComponentFixture<RIntermediateComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RIntermediateComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RIntermediateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
