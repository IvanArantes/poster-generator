import { Component, OnInit, Input } from '@angular/core';
import { Draggable } from 'src/app/model/draggable.model';

@Component({
  selector: 'app-drag',
  templateUrl: './drag.component.html',
  styleUrls: ['./drag.component.scss']
})
export class DragComponent implements OnInit {

  @Input() item: Draggable;

  constructor() { }

  ngOnInit() {
  }


}
