import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { routing, appRoutingProviders } from './app.routing';

//Componentes y paginas
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { MenuComponent } from './components/menu/menu.component';
import { IndexComponent } from './pages/index/index.component';
import { ContactoComponent } from './pages/contacto/contacto.component';
import { HabilidadesComponent } from './pages/habilidades/habilidades.component';
import { PortafolioComponent } from './pages/portafolio/portafolio.component';
import { SobreMiComponent } from './pages/sobre-mi/sobre-mi.component';
import { TitulosComponent } from './components/titulos/titulos.component';
import { LinksComponent } from './components/links/links.component';
import { TecnologiasComponent } from './components/tecnologias/tecnologias.component';
import { ContactsComponent } from './components/contacts/contacts.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    MenuComponent,
    IndexComponent,
    ContactoComponent,
    HabilidadesComponent,
    PortafolioComponent,
    SobreMiComponent,
    TitulosComponent,
    LinksComponent,
    TecnologiasComponent,
    ContactsComponent
  ],
  imports: [
    BrowserModule,
    routing
  ],
  providers: [appRoutingProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
