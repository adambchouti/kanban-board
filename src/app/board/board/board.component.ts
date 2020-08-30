import { Component, OnInit } from '@angular/core';
import {CdkDragDrop, moveItemInArray, transferArrayItem} from '@angular/cdk/drag-drop';
import {MatDialog} from '@angular/material/dialog';
import { BoardDialogNewItemComponent } from '../board-dialog-new-item/board-dialog-new-item.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Item } from '../item.model';

export enum Board {
  TODO,
  PROGRESS,
  BLOCKED,
  DONE
}

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.scss']
})
export class BoardComponent implements OnInit {
  board = Board;
  newItem: string;

  todo: Item[] = [
    {description: 'Get to work', created_date: Date.now()},
    {description: 'Pick up groceries', created_date: Date.now()},
    {description: 'Go home', created_date: Date.now()},
    {description: 'Fall asleep', created_date: Date.now()}
  ];

  progress: Item[] = [];

  blocked: Item[] = [];

  done: Item[] = [];

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

  openDialog(boardItem: Board): void {
    const dialogRef = this.dialog.open(BoardDialogNewItemComponent, {
      width: '250px',
      data: {item: this.newItem}
    });

    dialogRef.afterClosed().subscribe((result: String) => {
      console.log('The dialog was closed');
      console.log(result);
      if (result) {
        switch(boardItem) { 
          case Board.TODO: {
            this.todo.push({description: result, created_date: Date.now()});
            break; 
          } 
          case Board.PROGRESS: { 
            this.progress.push({description: result, created_date: Date.now()});
             break; 
          } 
          case Board.BLOCKED: { 
            this.blocked.push({description: result, created_date: Date.now()});
            break; 
          } 
          case Board.DONE: { 
            this.done.push({description: result, created_date: Date.now()});
            break; 
          } 
          default: { 
            // Shouldn't get here
            console.log('Something went wrong');
            break; 
          } 
       } 
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
