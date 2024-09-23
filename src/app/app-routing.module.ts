import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookdetailComponent } from './pages/bookdetail/bookdetail.component';
import { HomelistComponent } from './pages/homelist/homelist.component';
import { LoanDetailComponent } from './pages/loan-detail/loan-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { UsersComponent } from './pages/users/users.component';
import { BookComponent } from './pages/book/book.component';
import { AddBookComponent } from './pages/add-book/add-book.component';
import { LoginComponent } from './pages/login/login.component';
import { AdminComponent } from './pages/admin/admin.component';
import { LibrarianComponent } from './pages/librarian/librarian.component';
import { HomesinregComponent } from './pages/homesinreg/homesinreg.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: 'homesinreg', component: HomesinregComponent},
{path: '', redirectTo: 'homesinreg', pathMatch: 'full'},
{path: 'bookdetail', component: BookdetailComponent},
{path: 'homelist', component: HomelistComponent},
{path: 'loandetail', component: LoanDetailComponent},
{path: 'profile', component: ProfileComponent},
{path: 'users', component: UsersComponent},
{path: 'books', component: BookComponent},
{path: 'add-book', component: AddBookComponent},
{path: 'login', component: LoginComponent},
{path: 'admin', component: AdminComponent},
{path: 'librarian', component: LibrarianComponent},
{path: 'admin', component: AdminComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
