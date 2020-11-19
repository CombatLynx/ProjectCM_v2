import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { NgxPopper } from 'angular-popper';

import { AppComponent } from './app.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { GroupDetailComponent } from './group-detail/group-detail.component';
import { GroupsComponent } from './groups/groups.component';
import { MusicPanelComponent} from './music-panel/music-panel.component';

import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxPopper
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    GroupsComponent,
    GroupDetailComponent,
    MusicPanelComponent,
    FooterComponent,
    HeaderComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
