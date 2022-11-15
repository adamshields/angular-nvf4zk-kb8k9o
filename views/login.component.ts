import {
  Component,
  ElementRef,
  ViewChild,
  ViewContainerRef,
  ComponentFactoryResolver
} from '@angular/core';
import { Http } from '@angular/http';
@Component({
  selector: 'login',
  template: `
    <div>
      <h1>Login</h1>
      <h3>Login users</h3>
    </div>

    <button class="e-btn" (click)="this.showClick($event)">
      Show Login Dialog
    </button>
    <button class="e-btn" (click)="this.hideClick($event)">Close Dialog</button>
    <custom-dialog
      #dialogRef
      id="dialogElement"
      [visible]="isVisible"
      [dialogContent]="dialogContent"
    >
      <ng-template #dialogContent>
        <p>This is dialog in login Page</p>
        <ejs-calendar></ejs-calendar>
      </ng-template>
    </custom-dialog>
  `
})
export class LoginViewComponent {
  @ViewChild('dialogRef', { static: false }) dialogObj;
  private isVisible: boolean = false;
  constructor() {}

  showClick() {
    this.dialogObj.show();
  }

  hideClick() {
    this.dialogObj.hide();
  }
}
