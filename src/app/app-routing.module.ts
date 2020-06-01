import { NgModule, ModuleWithProviders } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', loadChildren: () => import('./games/games.module').then(m => m.GamesModule)}
];

export const AppRoutingModule: ModuleWithProviders = RouterModule.forRoot(routes);
