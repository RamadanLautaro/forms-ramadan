import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioComentariosComponent } from './formulario-comentarios.component';

describe('FormularioComentariosComponent', () => {
  let component: FormularioComentariosComponent;
  let fixture: ComponentFixture<FormularioComentariosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioComentariosComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormularioComentariosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
