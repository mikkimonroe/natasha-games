import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule }   from '@angular/forms';

import { TictactoeComponent } from './tictactoe/tictactoe.component'
import { ConnectFourComponent } from './connect-four/connect-four.component';
import { GamesRoutingModule } from './games-routing.module';

@NgModule({
  declarations: [TictactoeComponent, ConnectFourComponent],
  imports: [
    CommonModule,
    FormsModule,
    GamesRoutingModule
  ]
})
export class GamesModule { }
