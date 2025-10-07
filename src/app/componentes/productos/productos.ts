import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-productos',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './productos.html',
  styleUrl: './productos.css'
})
export class Productos {
  productos = [
    {
      nombre: 'Hamburguesa Gourmet',
      descripcion: 'Carne de res premium, queso cheddar, tocino crujiente y salsa especial.',
      precio: 12.50,
      imagen: 'https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=500&auto=format&fit=crop'
    },
    {
      nombre: 'Pizza Margarita',
      descripcion: 'La clásica pizza italiana con tomate fresco, mozzarella y albahaca.',
      precio: 10.00,
      imagen: 'https://images.unsplash.com/photo-1574071318508-1cdbab80d002?w=500&auto=format&fit=crop'
    },
    {
      nombre: 'Ensalada César',
      descripcion: 'Lechuga romana, pollo a la parrilla, croutones y aderezo César casero.',
      precio: 8.75,
      imagen: 'https://images.unsplash.com/photo-1550304943-4f24f54ddde9?w=500&auto=format&fit=crop'
    },
    {
      nombre: 'Sushi Variado',
      descripcion: 'Una selección de nuestros mejores nigiris y makis, frescos del día.',
      precio: 15.20,
      imagen: 'https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?w=500&auto=format&fit=crop'
    }
  ];
}