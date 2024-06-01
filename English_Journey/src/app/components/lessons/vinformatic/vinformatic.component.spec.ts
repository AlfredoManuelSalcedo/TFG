import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VInformaticComponent } from './vinformatic.component';

describe('VInformaticComponent', () => {
  let component: VInformaticComponent;
  let fixture: ComponentFixture<VInformaticComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VInformaticComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VInformaticComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
