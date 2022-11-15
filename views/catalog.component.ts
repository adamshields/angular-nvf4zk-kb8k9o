import { Component, ElementRef, ViewChild } from "@angular/core";
import { Http } from "@angular/http";

@Component({
  selector: "home",
  template: `
    <div>
      <h1>Catalog</h1>
      <h3>Catalog users</h3>
    </div>
    <button class="e-btn" (click)="this.showBtn($event)">
      Show Catalog Dialog
    </button>
    <button class="e-btn" (click)="this.hideBtn($event)">Close Dialog</button>
     <custom-dialog #dialogRef id="dialogElement" [visible]="isVisible" [dialogContent]="dialogContent">
    <ng-template #dialogContent>
    <p>Catelog Content</p>
    </ng-template>
    </custom-dialog>
  `
})
export class CatalogViewComponent {
  @ViewChild("dialogRef",{static:false}) dialogObj;
  private isVisible: boolean = false;
  constructor() {}

  showBtn(e) {
    this.dialogObj.show();
  }

  hideBtn(e) {
    this.dialogObj.hide();
  }
}
