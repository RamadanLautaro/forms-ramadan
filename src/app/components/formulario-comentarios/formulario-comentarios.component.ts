import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Comentario } from '../../classes/Comentario';

@Component({
  selector: 'app-formulario-comentarios',
  templateUrl: './formulario-comentarios.component.html',
  styleUrls: ['./formulario-comentarios.component.css']
})

export class FormularioComentariosComponent implements OnInit {

  listaComentarios: Comentario[] = [];

  formularioComentarios = new FormGroup({
    nombre: new FormControl('', [Validators.required, Validators.minLength(5)]),
    edad: new FormControl(null, [Validators.required, Validators.max(110)]),
    email: new FormControl('', [Validators.required, Validators.email]),
    mensaje: new FormControl('', [Validators.required, Validators.maxLength(70)])
  })

  enviarComentario () {
      
      let nombre: any = this.formularioComentarios.get('nombre')?.value
      let edad: any = this.formularioComentarios.get('edad')?.value
      let email: any = this.formularioComentarios.get('email')?.value
      let mensaje: any = this.formularioComentarios.get('mensaje')?.value

      let nuevoComentario = new Comentario(nombre, edad, email, mensaje);
      this.listaComentarios.push(nuevoComentario);

      this.limpiarFormulario();
  }

  limpiarFormulario() {
    this.formularioComentarios.get('nombre')?.setValue('');
    this.formularioComentarios.get('edad')?.setValue(null);
    this.formularioComentarios.get('email')?.setValue('');
    this.formularioComentarios.get('mensaje')?.setValue('');
  }

  constructor() { }

  ngOnInit(): void { }
}
