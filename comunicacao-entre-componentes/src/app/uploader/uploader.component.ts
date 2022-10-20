import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-uploader',
  templateUrl: './uploader.component.html',
  styleUrls: ['./uploader.component.css']
})
export class UploaderComponent implements OnInit {

  constructor() { }

  //EventEmmiter, é uma classe, que permite criar eventos customizados dentro do Angular
  @Output() // esse propriedade pode ser utilizada como um evento html 
  uploadCompleto: EventEmitter<string> = new EventEmitter<string>()


  ngOnInit(): void {
  }

  fazerUpload(){
    alert('Upload iniciando...')
    this.uploadCompleto.emit()
    // o método emit() serve para iniciar a emissão do evento personalizado
  }


}
