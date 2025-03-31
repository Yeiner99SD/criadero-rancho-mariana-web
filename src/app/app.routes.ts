import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { EscuelaComponent } from './pages/escuela/escuela.component';
import { GaleriaComponent } from './pages/galeria/galeria.component';
import { EjemplaresComponent } from './pages/ejemplares/ejemplares.component';
import { ContactoComponent } from './pages/contacto/contacto.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'escuela',
        component: EscuelaComponent
    },
    {
        path: 'galeria',
        component: GaleriaComponent
    },
    {
        path: 'ejemplares',
        component: EjemplaresComponent
    },
    {
        path: 'contacto',
        component: ContactoComponent
    },
    {
        path: '',
        redirectTo: 'home',
        pathMatch: 'full'
    }
       
];
