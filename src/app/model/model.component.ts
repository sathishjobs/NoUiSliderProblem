import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-model',
  templateUrl: './model.component.html',
  styleUrls: ['./model.component.css']
})
export class ModelComponent implements OnInit {
 @Input() Id : string;
  constructor() { }

  ngOnInit() {
    console.log(this.Id);
  }

}
