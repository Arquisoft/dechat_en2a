import { Component, OnInit, Inject } from '@angular/core';
import { Chat } from '../../models/chat.model';
import { User } from '../../models/user.model';
import { ChatService } from '../../services/chat.service';
import { MatDialog, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { MatSnackBar } from '@angular/material/snack-bar';

export interface DialogData {
  chatName: string;
  items: Array<any>;
  selectedItems: Array<any>;
}

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
  styleUrls: ['./chat-list.component.css']
})
export class ChatListComponent {
  chats: Chat[];

  chatName: string;
  selectedOthers: Array<User>;
  selectedItems: Array<any>;

  constructor(private cService: ChatService, public dialog: MatDialog, private snackBar: MatSnackBar) {
    cService.getConversations().subscribe(chats => {
      this.chats = chats;
    });
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(NewChatDialogComponent, {
      width: '600px',
      panelClass: 'new-chat-dialog',
      data: { name: this.chatName, items: this.convertFriendsForSelect(this.cService.getRawFriends()) }
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      this.chatName = result.chatName;
      this.selectedItems = result.selectedItems.map(e => e.item.webId);
      console.log(this.chatName);
      console.log(this.selectedItems);
      if ((this.chatName === null || this.chatName === '') && result.selectedItems.length === 0) {
        this.chatName = result.selectedItems[0].item.fullName;
      }
      this.cService.newConversation(this.selectedItems, this.chatName);
      this.snackBar.open('Conversation successfully created', '', {
        duration: 2000,
        panelClass: ['snackbar-success']
      })
    });
  }

  convertFriendsForSelect(others: Array<User>) {
    const items = [];
    let count = 1;
    others.forEach(e => {
      items.push({
        'id': count,
        'itemName': e.fullName,
        'item': e
      });
      count++;
    });
    return items;
  }

  newConversation() {
    this.openDialog();
  }
}



@Component({
  selector: 'app-chat-list-new-dialog',
  templateUrl: 'chat-list-new-dialog.html'
})
export class NewChatDialogComponent implements OnInit {
  dropdownSettings = {};

  constructor(
    public dialogRef: MatDialogRef<NewChatDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData) { }

  ngOnInit() {
    this.dropdownSettings = {
      singleSelection: false,
      text: 'Select friends',
      selectAllText: 'Select all',
      unSelectAllText: 'Deselect all',
      enableSearchFilter: true
    };
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

  onItemSelect(item: any) {
    console.log(item);
    console.log(this.data.selectedItems);
  }
  OnItemDeSelect(item: any) {
    console.log(item);
    console.log(this.data.selectedItems);
  }
  onSelectAll(items: any) {
    console.log(items);
  }
  onDeSelectAll(items: any) {
    console.log(items);
  }

}
