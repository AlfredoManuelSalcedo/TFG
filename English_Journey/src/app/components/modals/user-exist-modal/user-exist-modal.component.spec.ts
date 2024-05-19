import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UserExistModalComponent } from './user-exist-modal.component';

describe('UserExistModalComponent', () => {
  let component: UserExistModalComponent;
  let fixture: ComponentFixture<UserExistModalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UserExistModalComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(UserExistModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
