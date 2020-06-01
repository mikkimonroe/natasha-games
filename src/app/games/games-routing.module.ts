import { NgModule, ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TictactoeComponent } from './tictactoe/tictactoe.component'
import { ConnectFourComponent } from './connect-four/connect-four.component';

const routes: Routes = [
  {
    path: '',
    component: TictactoeComponent
  },
  {
    path: 'games/TicTacToe',
    component: TictactoeComponent
  },
  {
    path: 'games/ConnectFour',
    component: ConnectFourComponent
  }
];

// @NgModule({
//   imports: [RouterModule.forChild(routes)],
//   exports: [RouterModule],
// })
export const GamesRoutingModule: ModuleWithProviders = RouterModule.forChild(routes);
