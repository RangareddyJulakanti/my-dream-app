import { Component, OnInit } from '@angular/core';

export class TODO{
  constructor(private id:number,private desc:string){

  }
}
@Component({
  selector: 'app-list-todos',
  templateUrl: './list-todos.component.html',
  styleUrls: ['./list-todos.component.css']
})
export class ListTodosComponent implements OnInit {

  todos=[
    new TODO(1,'Learn To Dance'),
    new TODO(2,'Learn to Angular'),
    new TODO(3,'Learn java')
  ]
  todo={
    id:1,
    desc:'LearnToDance'
  }
  constructor() { }

  ngOnInit() {
  }

}
