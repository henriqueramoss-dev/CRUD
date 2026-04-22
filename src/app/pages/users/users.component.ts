import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [NgFor],
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent {

  users = [
    { id: 1, nome: 'João' },
    { id: 2, nome: 'Maria' }
  ];

}