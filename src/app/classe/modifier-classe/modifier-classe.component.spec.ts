import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ModifierClasseComponent } from './modifier-classe.component';

describe('ModifierClasseComponent', () => {
  let component: ModifierClasseComponent;
  let fixture: ComponentFixture<ModifierClasseComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ModifierClasseComponent]
    });
    fixture = TestBed.createComponent(ModifierClasseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
