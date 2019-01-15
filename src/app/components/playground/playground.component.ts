import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Draggable } from 'src/app/model/draggable.model';


@Component({
  selector: 'app-playground',
  templateUrl: './playground.component.html',
  styleUrls: ['./playground.component.scss']
})
export class PlaygroundComponent implements OnInit {
  itens: Array<Draggable> = [];

  @ViewChild('playgroundBase') 
  public divPlayground: ElementRef;

  constructor() { }

  ngOnInit() {
  }

  addBox(){
    let draggable = new Draggable();
    draggable.innerText = 'TESTE1';
    //draggable.parent = this.divPlayground;
    this.itens.push(draggable);

  }

}
