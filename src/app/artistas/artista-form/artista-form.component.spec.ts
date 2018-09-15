import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaFormComponent } from './artista-form.component';

describe('ArtistaFormComponent', () => {
  let component: ArtistaFormComponent;
  let fixture: ComponentFixture<ArtistaFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
