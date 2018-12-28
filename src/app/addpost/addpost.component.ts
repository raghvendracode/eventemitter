import { Component, EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-addpost',
  templateUrl: './addpost.component.html',
  styleUrls: ['./addpost.component.css']
})
export class AddpostComponent implements OnInit {

  @Output() postData = new EventEmitter();

  addPostMessage(postMessage1:HTMLInputElement){
  
  // Emits the post message.
    this.postData.emit(postMessage1.value);
    postMessage1.value = '';
  }

  constructor() { }

  ngOnInit() {
  }

}
