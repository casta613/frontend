import { NgModule } from "@angular/core";
import { ClientComponent } from "./client.component";
import { CommonModule } from "@angular/common";

@NgModule({
    imports: [CommonModule],
    declarations: [ClientComponent],
    exports: [ClientComponent]
})
export class ClientModule{}