import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './componentes/header/header.component';
import { LogoAPComponent } from './componentes/logo-ap/logo-ap.component';
import { SocialComponent } from './componentes/social/social.component';
import { BannerRAGComponent } from './componentes/banner-rag/banner-rag.component';
import { BodyComponent } from './componentes/body/body.component';
import { AboutMeComponent } from './componentes/about-me/about-me.component';
import { BarraNavComponent } from './componentes/barra-nav/barra-nav.component';
import { ExperienciaComponent } from './componentes/experiencia/experiencia.component';
import { SkillsComponent } from './componentes/skills/skills.component';
import { EducacionComponent } from './componentes/educacion/educacion.component';
import { ContactoComponent } from './componentes/contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LogoAPComponent,
    SocialComponent,
    BannerRAGComponent,
    BodyComponent,
    AboutMeComponent,
    BarraNavComponent,
    ExperienciaComponent,
    SkillsComponent,
    EducacionComponent,
    ContactoComponent,
    ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
