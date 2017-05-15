import { List } from '../models/List';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'lists-component',
  template: require('./Lists.component.html')
})
export class ListsComponent {
  @Input() lists: List[];
}
