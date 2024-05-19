import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorRegisterModalComponent } from './error-register-modal.component';

describe('ErrorRegisterModalComponent', () => {
  let component: ErrorRegisterModalComponent;
  let fixture: ComponentFixture<ErrorRegisterModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ErrorRegisterModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(ErrorRegisterModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
