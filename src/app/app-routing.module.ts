import { HomeComponent } from './components/home/home.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
=======
import { CvComponent } from './components/cv/cv.component';
>>>>>>> 02449b529871762e379518d0779365933d1b0f13
import { FlexboxComponent } from './components/flexbox/flexbox.component';

const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
<<<<<<< HEAD
=======
        path: 'cv',
        component: CvComponent
    },
    {
>>>>>>> 02449b529871762e379518d0779365933d1b0f13
        path: 'flex',
        component: FlexboxComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true })],
    exports: [RouterModule]
})
export class AppRoutingModule { }
