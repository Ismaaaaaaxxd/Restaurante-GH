import { Routes } from '@angular/router';
import { Inicio } from './componentes/inicio/inicio';
import { Productos } from './componentes/productos/productos';
import { Contacto } from './componentes/contacto/contacto';

export const routes: Routes = [
    { path: 'inicio', component: Inicio },
    { path: 'productos', component: Productos },
    { path: 'contacto', component: Contacto },
    { path: '', redirectTo: '/inicio', pathMatch: 'full' }, // Redirección por defecto
    { path: '**', redirectTo: '/inicio', pathMatch: 'full' } // Para rutas no encontradas
];