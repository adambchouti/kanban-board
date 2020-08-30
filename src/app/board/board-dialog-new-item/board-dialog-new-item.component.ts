import { Component, Inject } from '@angular/core';
import {MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';

export interface DialogData {
  item: string
}

@Component({
  selector: 'app-board-dialog-new-item',
  templateUrl: './board-dialog-new-item.component.html',
  styleUrls: ['./board-dialog-new-item.component.scss']
})
export class BoardDialogNewItemComponent {

  constructor(
    public dialogRef: MatDialogRef<BoardDialogNewItemComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) {}

  onNoClick(): void {
    this.dialogRef.close();
  }

}
