import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TictactoeComponent } from './tictactoe/tictactoe.component'
import { ConnectFourComponent } from './connect-four/connect-four.component';
import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  declarations: [TictactoeComponent, ConnectFourComponent],
  imports: [
    CommonModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
