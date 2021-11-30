import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent {
  localItem:any;

  

  title='My Todo List';

  list:any[]=[];

  onClick(item:string){
    this.list.push({id:this.list.length,name:item});
    
  }

  removeTask(id:number){
    console.warn(id);
    this.list=this.list.filter(item=>item.id!==id);
    
  }

  
}
