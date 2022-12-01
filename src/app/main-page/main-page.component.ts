import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})

export class MainPageComponent implements OnInit {
  text: string;
  toDoList: string[] = [];
  item: string;
  ind:number;
  openEdit: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  addCart(text: string) {
    if (!text) {
      return;
    }

    let checkList = this.toDoList.find((elArray: string) => elArray.toLowerCase() === text.toLowerCase());

    if (checkList) {
      alert("Заметка существует");
    } else {
      this.toDoList.push(text);
      this.text='';
    }
  }

  deleteItem(item) {
    const itemDelete = this.toDoList.indexOf(item,0);
    this.toDoList.splice(itemDelete,1);
  }

  editItem(item, index) {
    this.text = item;
    this.ind = index;
    this.openEdit= false;



  }
  editCart(text: string) {
    // this.deleteItem(this.item);
    this.toDoList[this.ind]=text;
    this.text='';
    this.openEdit= true;
}
cancelEdit(){
  this.text='';
  this.openEdit= true;
}
}
