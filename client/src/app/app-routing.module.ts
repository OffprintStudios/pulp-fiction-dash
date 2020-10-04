import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuthGuard } from './services/auth';
import { Roles } from './models/user';

import { AuditComponent } from './pages/audit';
import { DocsComponent } from './pages/docs';
import { HomeComponent } from './pages/home';
import { NewsComponent } from './pages/news';
import { QueueComponent } from './pages/queue';
import { ReportsComponent } from './pages/reports';
import { UsersComponent } from './pages/users';

const routes: Routes = [
  {path: 'home', canActivate: [AuthGuard], data: {roles: [Roles.Admin, Roles.Moderator, Roles.Contributor, Roles.WorkApprover]}, component: HomeComponent},
  {path: 'queue', canActivate: [AuthGuard], data: {roles: [Roles.Admin, Roles.Moderator, Roles.Contributor, Roles.WorkApprover]}, component: QueueComponent},
  {path: 'news', canActivate: [AuthGuard], data: {roles: [Roles.Admin, Roles.Moderator, Roles.Contributor]}, component: NewsComponent},
  {path: 'docs', canActivate: [AuthGuard], data: {roles: [Roles.Admin, Roles.Moderator, Roles.Contributor]}, component: DocsComponent},
  {path: 'reports', canActivate: [AuthGuard], data: {roles: [Roles.Admin, Roles.Moderator]}, component: ReportsComponent},
  {path: 'users', canActivate: [AuthGuard], data: {roles: [Roles.Admin, Roles.Moderator]}, component: UsersComponent},
  {path: 'audit', canActivate: [AuthGuard], data: {roles: [Roles.Admin, Roles.Moderator]}, component: AuditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
