import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AppCalculatriceTailwindComponent } from './app-calculatrice-tailwind.component';

describe('AppCalculatriceTailwindComponent', () => {
  let component: AppCalculatriceTailwindComponent;
  let fixture: ComponentFixture<AppCalculatriceTailwindComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [AppCalculatriceTailwindComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AppCalculatriceTailwindComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
