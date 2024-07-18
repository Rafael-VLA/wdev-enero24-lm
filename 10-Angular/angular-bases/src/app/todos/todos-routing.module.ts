import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { MainPageComponent } from "./pages/main-page/main-page.component";

const routes: Routes = [
    {
        path: "",
        component: MainPageComponent
    },
    {
        path: "**", // en caso de que no se encuentre un path dentro de todos válido
        redirectTo: "" // redireccionamos al MainPage
    }
]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class TodosRoutingModule {

}