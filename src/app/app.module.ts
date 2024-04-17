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
import { ProductDetailComponent } from './product-list/product-detail/product-detail.component';
import { SetBackground } from './CustomDirectives/SetBackground.directive';
import { HighlightDirective } from './CustomDirectives/highlight.directive';
import { ButtonHoverSkipTestsDirective } from './CustomDirectives/button-hover--skip-tests.directive';
import { DisableProductDirective } from './CustomDirectives/disable-product.directive';
import { InputOnlyStringDirective } from './CustomDirectives/input-only-string.directive';
import { CardNoDirective } from './CustomDirectives/card-no.directive';
import { CalculateDiscountPipe } from './CustomPipes/calculate-discount.pipe';
import { FilterPipe } from './CustomPipes/filter.pipe';
import { IfDirective } from './CustomDirectives/if.directive';

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
    ProductDetailComponent,
    SetBackground,
    HighlightDirective,
    ButtonHoverSkipTestsDirective,
    DisableProductDirective,
    InputOnlyStringDirective,
    CardNoDirective,
    CalculateDiscountPipe,
    FilterPipe,
    IfDirective,
  ],
  imports: [BrowserModule, FormsModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
