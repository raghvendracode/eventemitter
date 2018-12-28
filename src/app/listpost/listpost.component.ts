import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-listpost',
  templateUrl: './listpost.component.html',
  styleUrls: ['./listpost.component.css']
})
export class ListpostComponent implements OnInit {

  // Listen the post message
@Input() listPost1 = [];
  constructor() { }

  ngOnInit() {
  }

}
