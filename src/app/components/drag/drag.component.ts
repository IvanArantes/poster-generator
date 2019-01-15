import { Component, OnInit, Input } from '@angular/core';
import { Draggable } from 'src/app/model/draggable.model';
import { PlaygroundComponent } from '../playground/playground.component';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit {

  @Input() item: Draggable;
  @Input() parent: PlaygroundComponent;
  private actualParent: any;
  constructor() { 

  }

  ngOnInit() {
    this.actualParent = this.parent;
  }


}
