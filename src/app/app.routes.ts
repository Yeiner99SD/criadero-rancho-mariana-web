import { Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';


export const routes: Routes = [
    {
        path: 'home',
        loadComponent: () => import('./pages/home/home.component').then((c) => c.HomeComponent)
    },
    {
        path: 'escuela',
        loadComponent: () => import('./pages/escuela/escuela.component').then((c) => c.EscuelaComponent)
    },
    {
        path: 'galeria',
        loadComponent: () => import('./pages/galeria/galeria.component').then((c) => c.GaleriaComponent)
    },
    {
        path: 'ejemplares',
        loadComponent: () => import('./pages/ejemplares/ejemplares.component').then((c) => c.EjemplaresComponent)
    },
    {
        path: 'ejemplares/:id',
        loadComponent: () => import('./pages/caballo-detalles/caballo-detalles.component').then((c) => c.CaballoDetallesComponent)
    },
    {
        path: 'contacto',
        loadComponent: () => import('./pages/contacto/contacto.component').then((c)=> c.ContactoComponent)
    },
    {
        path: '404',
        component: NotFoundComponent
    },
    {
        path: '',
        redirectTo: '/home',
        pathMatch: 'full'
    } ,      
    {
        path: '**',
        redirectTo: '/404',
        pathMatch: 'full'
    },
];
