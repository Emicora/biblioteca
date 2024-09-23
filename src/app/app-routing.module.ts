import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { BookdetailComponent } from './pages/bookdetail/bookdetail.component';
import { HomelistComponent } from './pages/homelist/homelist.component';
import { LoanDetailComponent } from './pages/loan-detail/loan-detail.component';
import { ProfileComponent } from './pages/profile/profile.component';

const routes: Routes = [
{path: 'home', component: HomeComponent},
{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'bookdetail', component: BookdetailComponent},
{path: 'homelist', component: HomelistComponent},
{path: 'loandetail', component: LoanDetailComponent},
{path: 'profile', component: ProfileComponent},





];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
