import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardComponent } from './board/board.component';
import { BoardItemComponent } from './board-item/board-item.component';
import { BoardRoutingModule } from './board-routing.module';
import {DragDropModule} from '@angular/cdk/drag-drop';
import { SharedModule } from '../shared/shared.module';
import { BoardDialogNewItemComponent } from './board-dialog-new-item/board-dialog-new-item.component';
import { FormsModule } from '@angular/forms';


@NgModule({
  declarations: [BoardComponent, BoardItemComponent, BoardDialogNewItemComponent],
  imports: [
    CommonModule,
    SharedModule,
    DragDropModule,
    FormsModule,
    BoardRoutingModule
  ],
  entryComponents: [
    BoardDialogNewItemComponent
  ]
})
export class BoardModule { }
