import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AuditComponent } from './pages/audit';
import { DocsComponent } from './pages/docs';
import { HomeComponent } from './pages/home';
import { NewsComponent } from './pages/news';
import { QueueComponent } from './pages/queue';
import { ReportsComponent } from './pages/reports';
import { UsersComponent } from './pages/users';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'queue', component: QueueComponent},
  {path: 'news', component: NewsComponent},
  {path: 'docs', component: DocsComponent},
  {path: 'reports', component: ReportsComponent},
  {path: 'users', component: UsersComponent},
  {path: 'audit', component: AuditComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
