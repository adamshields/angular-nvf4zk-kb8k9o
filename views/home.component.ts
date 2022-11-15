import { Component, ElementRef, ViewChild } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "home",
  template: `
    <div>
      <h1>Home</h1>
      <h3>Total users: # {{ users?.length }}</h3>
    </div>

    <button class="e-btn" (click)="this.showBtnClick($event)">
      Show Dialog
    </button>
    <button class="e-btn" (click)="this.hideBtnClick($event)">
      Close Dialog
    </button>
    <custom-dialog #dialogRef 
      id="dialogElement"
      [visible]="isVisible"
      [dialogContent]="dialogContent"
    >
      <ng-template #dialogContent>
         <ejs-calendar></ejs-calendar>
      </ng-template>
    </custom-dialog>
  `
})
export class HomeViewComponent {
  @ViewChild("dialogRef",{static:false}) dialogObj;
  private isVisible: boolean = false;
  constructor() {}

  showBtnClick(e) {
   this.dialogObj.show();
  }

  hideBtnClick(e) {
    this.dialogObj.hide();
  }
}
