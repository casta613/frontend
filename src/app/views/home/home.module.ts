import { NgModule } from "@angular/core";
import { HomeRoutingModule } from "./home-routing.module";
import { RouterOutlet } from "@angular/router";
import { HomeComponent } from "./home.component";

@NgModule({
    declarations: [HomeComponent],
    imports: [HomeRoutingModule]
})
export class HomeModule{}