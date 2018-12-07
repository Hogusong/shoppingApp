import { Component, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
  @Output() onSelectBrowser = new EventEmitter<string>();

  constructor() { }

  ngOnInit() {
  }

  onSelect(option: string) {
    this.onSelectBrowser.emit(option);
  }
}