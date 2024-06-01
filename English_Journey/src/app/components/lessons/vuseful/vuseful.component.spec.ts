import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VUsefulComponent } from './vuseful.component';

describe('VUsefulComponent', () => {
  let component: VUsefulComponent;
  let fixture: ComponentFixture<VUsefulComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VUsefulComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VUsefulComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
