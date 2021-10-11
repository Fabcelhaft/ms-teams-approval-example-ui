import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApprovementFormComponent } from './components/approvement-form/approvement-form.component';
import {InputTextModule} from "primeng/inputtext";
import {FormsModule} from "@angular/forms";
import {ListboxModule} from "primeng/listbox";
import {MultiSelectModule} from "primeng/multiselect";
import {InputSwitchModule} from "primeng/inputswitch";
import {ToggleButtonModule} from "primeng/togglebutton";
import {ButtonModule} from "primeng/button";
import {CardModule} from "primeng/card";
import {ToastModule} from "primeng/toast";
import {HttpClientModule} from "@angular/common/http";
import {MessageService} from "primeng/api";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {DividerModule} from "primeng/divider";
@NgModule({
  declarations: [
    AppComponent,
    ApprovementFormComponent
  ],
    imports: [
        BrowserModule,
        BrowserAnimationsModule,
        AppRoutingModule,
        InputTextModule,
        FormsModule,
        ListboxModule,
        MultiSelectModule,
        InputSwitchModule,
        ToggleButtonModule,
        ButtonModule,
        CardModule,
        ToastModule,
        HttpClientModule,
        DividerModule,
    ],
  providers: [MessageService],
  bootstrap: [AppComponent]
})
export class AppModule { }
