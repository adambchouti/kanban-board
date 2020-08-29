import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// App imports
import { SharedModule } from '../shared/shared.module';

// Core exports
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';



@NgModule({
  declarations: [NavbarComponent, FooterComponent],
  imports: [
    CommonModule,
    SharedModule
  ],
  exports: [
    NavbarComponent,
    FooterComponent
  ]
})
export class CoreModule { }
