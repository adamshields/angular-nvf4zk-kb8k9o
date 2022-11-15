import {
  Component,
  ViewChild,
  ElementRef,
  Input,
  TemplateRef
} from "@angular/core";
import { DialogComponent } from "@syncfusion/ej2-angular-popups";

@Component({
  selector: "custom-dialog",
  template:
    '<ejs-dialog [id]="id" header="Dialog with subcomponent" #dialogObj width="400px" [showCloseIcon]="true" [visible]="visible" [content]="dialogContent"></ejs-dialog>'
})
export class ReuseDialogComponent {
  @Input("dialogContent") dialogContent: TemplateRef<any>;
  @Input("id") id: string;
  @Input("visible") visible: string;
  @ViewChild("dialogObj",{static:false}) dialogObj;
  constructor() {}

  show() {
    this.dialogObj.show();
  }
  hide() {
    this.dialogObj.hide();
  }
}
