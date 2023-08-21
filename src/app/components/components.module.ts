import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { DesignComponentsModule } from '../design-components/design-components.module';
import { FooterComponent } from './partials/footer/footer.component';
import { NoDataFoundComponent } from './shared/no-data-found/no-data-found.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';

@NgModule({
  declarations: [PageNotFoundComponent, FooterComponent, NoDataFoundComponent],
  imports: [CommonModule, DesignComponentsModule],
})
export class ComponentsModule {}
