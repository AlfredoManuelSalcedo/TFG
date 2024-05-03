import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutheticationScreenComponent } from './authetication-screen.component';

describe('AutheticationScreenComponent', () => {
  let component: AutheticationScreenComponent;
  let fixture: ComponentFixture<AutheticationScreenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutheticationScreenComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AutheticationScreenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
