import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsComponent } from './components/components.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { RedesComponent } from './components/barradeprogresos/redes.component';
import { ImagenydatosComponent } from './components/imagenydatos/imagenydatos.component';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    ComponentsComponent,
    NavbarComponent,
    DashboardComponent,
    CarouselComponent,
    RedesComponent,
    ImagenydatosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
