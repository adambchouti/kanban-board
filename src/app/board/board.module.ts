import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { BoardRoutingModule } from './board-routing.module';


@NgModule({
  declarations: [BoardComponent, BoardItemComponent],
  imports: [
    CommonModule,
    BoardRoutingModule
  ]
})
export class BoardModule { }
