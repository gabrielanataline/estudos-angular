import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, NgControlStatus, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive',
  templateUrl: './reactive.component.html',
  styleUrls: ['./reactive.component.css']
})
export class ReactiveComponent implements OnInit {
//___________________________________________________________________________________
  // nome: FormControl = new FormControl ('')
  // email: FormControl = new FormControl('')
  // senha: FormControl = new FormControl ('')

//___________________________________________________________________________________

  // dadosForm: FormGroup = new FormGroup({
  //   nome: new FormControl ('', [Validators.required, Validators.minLength(4)]),  //validações
  //   email: new FormControl ('', [Validators.email, Validators.required]),
  //   senha: new FormControl (''),
  //   endereco: new FormGroup({
  //     cep: new FormControl(''),
  //     rua: new FormControl(''),
  //     complemento: new FormControl (''),
  //     numero: new FormControl ('')
  //   })
  // }) 
//___________________________________________________________________________________


// formArray > utilizado para armazenar form NgControlStatus, 
// form groups ou outros form array dentro de um array ... ele precisa estar dentro do FormGroup
 


// o metodo group() do FormBuilder é responsável por criar um novo Objeto do tipo FormGroup
dadosForm: FormGroup = this.fb.group({
  nome: ['', [Validators.required, Validators.minLength(5)]],
  emai: [''],
  senha: [''],
  endereco: this.fb.group({
    cep: [''],
    rua: [''],
    complemento: [''],
    numer: ['']
  }),
  telefones: this.fb.array([
    ['']    
  ])
})

/*transformar o Abstract Control (get) em > Form Array*/
tels = this.dadosForm.get('telefones') as FormArray




/*Form Builder > objeto que permite criar 
FormsControls, FormGroups ou FormArrays com uma sintaxe menor. */


  constructor(
    private fb: FormBuilder
  ) { }

  ngOnInit(): void {
  }

  enviar (){

    // a propriedade value, do formsControl, possui o valor que foi digitado dentro do campo do formulário

    console.log(this.dadosForm.value)
}

adicionarCampoDeTelefone (){
  this.tels.push(new FormControl(''))
}
}
