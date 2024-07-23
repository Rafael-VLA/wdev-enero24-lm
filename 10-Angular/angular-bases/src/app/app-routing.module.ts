import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomePageComponent } from './shared/pages/home-page/home-page.component';
import { UserPageComponent } from './shared/pages/user-page/user-page.component';
import { ContactPagesComponent } from './shared/pages/contact-pages/contact-pages.component';
import { TodosModule } from './todos/todos.module';
import { TodosRoutingModule } from './todos/todos-routing.module';

// 1. Crear una página contacto(ContactPage) dentro del módulo shared (ng generate component shared/...)
// 2. Configurar una ruta para la página contacto
// 3. El path se debe llamar contact

const routes: Routes = [
  {
    path: "",
    component: HomePageComponent
  },
  {
    path: "user",
    component: UserPageComponent
  },
  {
    path: "contact",
    component: ContactPagesComponent
  },
  {
    path: "todos",
    loadChildren: () => import('./todos/todos.module').then(m => m.TodosModule)
    //loadChildren: () => TodosModule
  },
  {
    path: "**", // en caso de que no se encuentre un path válido
    redirectTo: "" // redireccionamos al home
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
