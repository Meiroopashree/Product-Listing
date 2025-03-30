import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ProductListingComponent } from './product-listing/product-listing.component';

const routes: Routes = [
  {component:ProductListingComponent,path:''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
