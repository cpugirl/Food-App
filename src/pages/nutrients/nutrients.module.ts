import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { NutrientsPage } from './nutrients';

@NgModule({
  declarations: [
    NutrientsPage,
  ],
  imports: [
    IonicPageModule.forChild(NutrientsPage),
  ],
})
export class NutrientsPageModule {}
