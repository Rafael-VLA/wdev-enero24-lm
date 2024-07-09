import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { MainPageComponent } from './pages/main-page/main-page.component';
import { CountComponent } from './components/count/count.component';

@NgModule({
    declarations: [
        MainPageComponent,
        CountComponent
    ],
    exports: [
        MainPageComponent
    ],
    imports: [ // Vamos a importar módulos
        CommonModule
    ]
})
export class CounterModule {

}