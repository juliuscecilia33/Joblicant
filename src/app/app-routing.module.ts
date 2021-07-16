import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApplicationComponent } from './application/application.component';
import { CommonInformationComponent } from './common-information/common-information.component';

const routes: Routes = [
  { path: 'application', component: ApplicationComponent },
  { path: 'common', component: CommonInformationComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
