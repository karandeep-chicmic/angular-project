import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { BodyContentComponent } from './body-content/body-content.component';
import { ProductListComponent } from './product-list/product-list.component';

@NgModule({
  declarations: [
    HeaderComponent,
    BodyContentComponent,
    ProductListComponent,
    AppComponent,
  ],
  imports: [BrowserModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
