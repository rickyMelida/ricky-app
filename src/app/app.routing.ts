import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { IndexComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';

const rutas: Routes = [
    { path: '', component: IndexComponent },
    { path: 'contacto', component: ContactoComponent },
    { path: 'habilidades', component: HabilidadesComponent },
    { path: 'portafolio', component: PortafolioComponent },
    { path: 'sobre-mi', component: SobreMiComponent }
];

export const appRoutingProviders: any[] = [];
export const routing: ModuleWithProviders = RouterModule.forRoot(rutas);