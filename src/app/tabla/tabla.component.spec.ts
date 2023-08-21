import { ComponentFixture, TestBed } from '@angular/core/testing';

import { tablaComponent } from './tabla.component';

describe(' tablaComponent', () => {
  let component:  tablaComponent;
  let fixture: ComponentFixture< tablaComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ tablaComponent]
    });
    fixture = TestBed.createComponent( tablaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
