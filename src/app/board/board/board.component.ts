import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import { BoardDialogNewItemComponent } from '../board-dialog-new-item/board-dialog-new-item.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  newItem: string;

  todo = [
    'Get to work',
    'Pick up groceries',
    'Go home',
    'Fall asleep'
  ];

  progress = [];

  blocked = [];

  done = [];

  constructor(
    public dialog: MatDialog,
    private _snackBar: MatSnackBar
  ) { }

  ngOnInit(): void {
  }

  drop(event: CdkDragDrop<string[]>) {
    if (event.previousContainer === event.container) {
      moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
    } else {
      transferArrayItem(event.previousContainer.data,
                        event.container.data,
                        event.previousIndex,
                        event.currentIndex);
    }
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(BoardDialogNewItemComponent, {
      width: '250px',
      data: {item: this.newItem}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        this.todo.push(result);
      } else {
        this.openSnackBar();
      }
    });
  }

  openSnackBar() {
    this._snackBar.open('Cannot be empty', 'End now', {
      duration: 5000,
      horizontalPosition: "center",
      verticalPosition: "top",
    });
  }

}
