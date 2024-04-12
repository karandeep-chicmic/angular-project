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

@NgModule({
  declarations: [
    HeaderComponent,
    BodyContentComponent,
    ProductListComponent,
    SearchBarComponent,
    AppComponent,
    TodoComponent,
    ProductComponent,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
