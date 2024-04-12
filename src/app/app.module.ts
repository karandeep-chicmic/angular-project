import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { ProductListComponent } from './product-list/product-list.component';
import { SearchBarComponent } from './product-list/search-bar/search-bar.component';
import { FormsModule } from '@angular/forms';
import { TodoComponent } from './todo/todo.component';
import { ProductComponent } from './product-list/product/product.component';
import { FilterComponent } from './product-list/filter/filter.component';
import { TaskComponent } from './task/task.component';
import { Table1Component } from './task/table1/table1.component';
import { Table2Component } from './task/table2/table2.component';
import { FormComponent } from './task/form/form.component';
import { SearchComponent } from './task/search/search.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyContentComponent,
    ProductListComponent,
    SearchBarComponent,
    AppComponent,
    TodoComponent,
    ProductComponent,
    FilterComponent,
    TaskComponent,
    Table1Component,
    Table2Component,
    FormComponent,
    SearchComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
