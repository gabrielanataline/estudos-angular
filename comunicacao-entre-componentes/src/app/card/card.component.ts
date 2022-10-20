import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  @Input()
  banner: string = 'https://images.unsplash.com/photo-1661956602868-6ae368943878?ixlib=rb-1.2.1&ixid=MnwxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80'
  
  @Input()
  titulo: string = 'Lorem ipsum dolor sit amet consectetur adipisicing elit'
  
  @Input()
  username: string = 'Larissa Ribeiro'
  
  @Input()
  userfoto : string = 'https://images.unsplash.com/photo-1665861291224-1b996e769fa4?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80'

  @Input()
  corBtn: string = 'red'

  constructor() { }

  ngOnInit(): void {
  }

}
