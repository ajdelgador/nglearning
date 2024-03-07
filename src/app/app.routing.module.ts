import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactComponent } from './contact/contact.component';
import { HomeComponent } from './home/home.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { UserComponent } from './users/user/user.component';
import { ListComponent } from './users/list/list.component';
import { DetailsComponent } from './users/details/details.component';
import { PermissionsGuard } from './guards/permissions.guard';

const routes: Routes = [
    { path: '', redirectTo: '/home', pathMatch: 'full' },
    /* { Movido a modulo
        path: 'contact-reactive',
        component: ContactReactiveComponent,
        canDeactivate: [WithoutSaveGuard],
        resolve: { departments: DataResolverService }
    }, */
    {
        path: 'contact-reactive', loadChildren: () => import('./contact-reactive/contact-reactive-routing.module').then(m => m.ContactReactiveRoutingModule)
    },
    { path: 'contact-template', component: ContactComponent },
    { path: 'contact-template/:id', component: ContactComponent },
    { path: 'home', component: HomeComponent },
    {//users and children paths are protected by guard
        path: 'users',
        component: UserComponent,
        canActivate: [PermissionsGuard],//guardianes
        children: [
            { path: 'list', component: ListComponent },
            { path: 'details', component: DetailsComponent }
        ]
    },
    { path: '**', component: NotFoundComponent }
];
@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }