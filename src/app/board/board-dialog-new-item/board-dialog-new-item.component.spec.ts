import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BoardDialogNewItemComponent } from './board-dialog-new-item.component';

describe('BoardDialogNewItemComponent', () => {
  let component: BoardDialogNewItemComponent;
  let fixture: ComponentFixture<BoardDialogNewItemComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BoardDialogNewItemComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BoardDialogNewItemComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
