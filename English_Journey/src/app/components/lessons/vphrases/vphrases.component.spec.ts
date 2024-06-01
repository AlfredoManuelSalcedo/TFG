import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VPhrasesComponent } from './vphrases.component';

describe('VPhrasesComponent', () => {
  let component: VPhrasesComponent;
  let fixture: ComponentFixture<VPhrasesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VPhrasesComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VPhrasesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
