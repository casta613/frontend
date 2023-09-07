import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from "./home.component";
import { ClientComponent } from "../clients/client.component";

const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        children: [
          {
            path: 'clients',
            component: ClientComponent
          }  
        ]
    }
]


@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class HomeRoutingModule{}