import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserPageComponent } from './pages/user-page/user-page.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ContactPagesComponent } from './pages/contact-pages/contact-pages.component';
import { CustomNavComponent } from './components/custom-nav/custom-nav.component';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    UserPageComponent,
    HomePageComponent,
    ContactPagesComponent,
    CustomNavComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    // Exportar los componentes que se vayan a utilizar
    CustomNavComponent
  ]
})
export class SharedModule { }
