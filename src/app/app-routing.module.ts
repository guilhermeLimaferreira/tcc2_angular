import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: 'list',
    loadChildren: () => import('./pages/list-page/list-page.module').then( m => m.ListPagePageModule)
  },
  {
    path: 'edit/:id',
    loadChildren: () => import('./pages/edit-page/edit-page.module').then( m => m.EditPagePageModule)
  },
  {
    path: 'create',
    loadChildren: () => import('./pages/create-page/create-page.module').then( m => m.CreatePagePageModule)
  }
];


@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
