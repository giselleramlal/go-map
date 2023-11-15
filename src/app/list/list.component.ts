import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgFor} from '@angular/common';
import {List} from '../data-list';

@Component({
  selector: 'app-list',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './list.component.html',
  styleUrl: './list.component.scss'
})
export class ListComponent {
  list = List;
}
