import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatIconModule} from '@angular/material/icon';
import {MatDividerModule} from '@angular/material/divider';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

const MaterialComponents = [
  MatButtonModule,
  MatGridListModule,
  MatInputModule,
  MatFormFieldModule,
  MatIconModule,
  MatDividerModule,
  MatListModule,
  MatCardModule
];

@NgModule({
  imports: [MatButtonModule,
            MatGridListModule,
            MatInputModule,
            MatFormFieldModule,
            MatIconModule,
            MatDividerModule,
            MatListModule,
            MatCardModule],
  exports: [MatButtonModule,
            MatGridListModule,
            MatInputModule,
            MatFormFieldModule,
            MatIconModule,
            MatDividerModule,
            MatListModule,
            MatCardModule]
})
export class MaterialModule { }
