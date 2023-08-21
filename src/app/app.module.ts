import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NZ_I18N, en_US } from 'ng-zorro-antd/i18n';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ComponentsModule } from './components/components.module';
import { LayoutComponent } from './components/layout/layout.component';
import { NavbarComponent } from './components/partials/navbar/navbar.component';
import { SidebarComponent } from './components/partials/sidebar/sidebar.component';
import { DesignComponentsModule } from './design-components/design-components.module';
import { GraphQLModule } from './graphql.module';
import { IconsProviderModule } from './icons-provider.module';

registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    SidebarComponent,
    NavbarComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    AppRoutingModule,
    IconsProviderModule,
    ComponentsModule,
    DesignComponentsModule,
    GraphQLModule,
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US },
    { provide: 'LOCALSTORAGE', useValue: window.localStorage },
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
