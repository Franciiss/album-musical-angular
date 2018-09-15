import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ArtistaPesquisaComponent } from './artista-pesquisa.component';

describe('PesquisaComponent', () => {
  let component: ArtistaPesquisaComponent;
  let fixture: ComponentFixture<ArtistaPesquisaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ArtistaPesquisaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ArtistaPesquisaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
