import { Component } from '@angular/core';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [NgFor],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css'
})
export class ProductsComponent {

  products = [
    { id: 1, nome: 'Produto 1', preco: 100 },
    { id: 2, nome: 'Produto 2', preco: 200 }
  ];

}