import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'

import { MainPageComponent } from './pages/main-page/main-page.component';
import { ListComponent } from './components/list/list.component';
import { AddTodoComponent } from './components/add-todo/add-todo.component';
import { TodosRoutingModule } from './todos-routing.module';

@NgModule({
  declarations: [
    MainPageComponent,
    ListComponent,
    AddTodoComponent
  ],
  exports: [
    MainPageComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    TodosRoutingModule
  ]
})
export class TodosModule { }
