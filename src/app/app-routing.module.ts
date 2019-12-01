import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Day1ComponentComponent } from "./day1-component/day1-component.component";

const routes: Routes = [{ path: "day1", component: Day1ComponentComponent }];

// {path: 'day1', component: Day1ComponentComponent}

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
