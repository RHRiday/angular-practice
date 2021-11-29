import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './components/login/login.component';
import { RootComponent } from './components/root/root.component';
import { SignupComponent } from './components/signup/signup.component';
import { TodosComponent } from './components/todos/todos.component';

const routes: Routes = [
    {
        path: '',
        component: RootComponent,
        pathMatch: 'full'
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'signup',
        component: SignupComponent
    },
    {
        path: 'todo',
        component: TodosComponent
    }
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes)
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }