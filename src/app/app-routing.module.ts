import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { FlexboxComponent } from './components/flexbox/flexbox.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'flex',
        component: FlexboxComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {useHash: true})],
    exports: [RouterModule]
})
export class AppRoutingModule { }
