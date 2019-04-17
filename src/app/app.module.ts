import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DinosauresComponent } from './dinosaures/dinosaures.component';
import { DinosauresDetailsComponent } from './dinosaures-details/dinosaures-details.component';
import { DinosauresCreateComponent } from './dinosaures-create/dinosaures-create.component';
import { DinosauresEditComponent } from './dinosaures-edit/dinosaures-edit.component';
import {
  MatInputModule,
  MatPaginatorModule,
  MatProgressSpinnerModule,
  MatSortModule,
  MatTableModule,
  MatIconModule,
  MatButtonModule,
  MatCardModule,
  MatFormFieldModule } from '@angular/material';

@NgModule({
  declarations: [
    AppComponent,
    DinosauresComponent,
    DinosauresDetailsComponent,
    DinosauresCreateComponent,
    DinosauresEditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    MatInputModule,
    MatPaginatorModule,
    MatProgressSpinnerModule,
    MatSortModule,
    MatTableModule,
    MatIconModule,
    MatCardModule,
    MatFormFieldModule,
    MatButtonModule




  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
