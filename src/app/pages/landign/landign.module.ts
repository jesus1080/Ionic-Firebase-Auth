import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LandignPageRoutingModule } from './landign-routing.module';

import { LandignPage } from './landign.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    LandignPageRoutingModule
  ],
  declarations: [LandignPage]
})
export class LandignPageModule {}
