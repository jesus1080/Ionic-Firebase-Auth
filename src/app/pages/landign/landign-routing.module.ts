import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandignPage } from './landign.page';

const routes: Routes = [
  {
    path: '',
    component: LandignPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LandignPageRoutingModule {}
