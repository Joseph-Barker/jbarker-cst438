import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';
import {MatStepperModule} from '@angular/material/stepper';
import {MatMenuModule} from '@angular/material/menu';
import {MatSelectModule} from '@angular/material/select';

const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatCardModule,
  MatStepperModule,
  MatMenuModule,
  MatSelectModule
];

@NgModule({
  imports: [MaterialComponents],
  exports: [MaterialComponents]
})
export class MaterialModule { }
