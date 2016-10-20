import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { DataTablesModule } from 'angular-datatables';

import { AppRoutingModule } from './app.routing';

import { AppComponent } from './app.component';

// Basic examples
import { ZeroConfigComponent }  from './basic/zero-config.component';
import { WithOptionsComponent }  from './basic/with-options.component';
import { WithAjaxComponent }  from './basic/with-ajax.component';

// Advanced examples
import { DtInstanceComponent } from './advanced/dt-instance.component';

@NgModule({
  imports: [
    BrowserModule,
    DataTablesModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,

    ZeroConfigComponent,
    WithOptionsComponent,
    WithAjaxComponent,

    DtInstanceComponent
  ],
  bootstrap: [ AppComponent ]
})
export class AppModule {}
