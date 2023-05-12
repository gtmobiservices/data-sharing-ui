/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CoreModule } from './@core/core.module';
import { ThemeModule } from './@theme/theme.module';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import {
  NbAutocompleteModule,
  NbButtonModule,
  NbCardModule,
  NbChatModule,
  NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule,
  NbIconModule,
  NbInputModule,
  NbLayoutModule,
  NbListModule,
  NbMenuModule,
  NbSearchModule,
  NbSelectModule,
  NbSidebarModule,
  NbTimepickerModule,
  NbToastrModule,
  NbTreeGridModule,
  NbWindowModule,
  NB_TIME_PICKER_CONFIG,
} from '@nebular/theme';
import { NbPasswordAuthStrategy, NbAuthModule } from '@nebular/auth';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NbRoleProvider, NbSecurityModule } from '@nebular/security';
import { ToastrModule } from 'ngx-toastr';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomeTableModule } from './pages/custome-table/custome-table.module';
import { NgSelect2Module } from 'ng-select2';
import { NgSelectModule } from '@ng-select/ng-select';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { NgxEchartsModule } from 'ngx-echarts';
import { NbButtonGroupModule } from './theme/public_api';
import { GoogleMapsModule } from '@angular/google-maps';



@NgModule({
  declarations: [AppComponent],
  imports: [
    NbSecurityModule.forRoot(),
    NgxPaginationModule,
    FormsModule,
    NbCardModule,
    NgxPaginationModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    ReactiveFormsModule,
    NbSelectModule,
    MatButtonToggleModule,
    FormsModule,
    NbButtonModule,
    Ng2SearchPipeModule,
    CustomeTableModule,
    NbButtonGroupModule,
    NgxSpinnerModule,
    NbSearchModule,
    GoogleMapsModule,
    NgxEchartsModule,
    NbCardModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    NbCheckboxModule,
    NbListModule,
    NbButtonModule,
    NbInputModule,
    NbButtonModule,
    NbInputModule,
    NgSelect2Module,
    Ng2SearchPipeModule,
    CustomeTableModule,
    NbSelectModule,
    NgxSpinnerModule,
    Ng2SearchPipeModule,
    CustomeTableModule,
    NbSelectModule,
    NgxSpinnerModule,
    NgxSpinnerModule,
    NbCheckboxModule,
    Ng2OrderModule,
    ToastrModule,
    AngularMultiSelectModule,
    NbCheckboxModule,
    NbDatepickerModule,
    NbTimepickerModule,
    NbDialogModule,
    NbAutocompleteModule,
    NgSelectModule,
    NgSelect2Module,
    NbLayoutModule,
    NbDatepickerModule.forRoot(),
    NbCardModule,
    NgxPaginationModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    Ng2SearchPipeModule,
    FormsModule,
    NbButtonModule,
    NbDialogModule,
    NbAutocompleteModule,
    NgSelectModule,
    NgSelect2Module,
    NbLayoutModule,
    NbSelectModule,
    CustomeTableModule,
    NgxSpinnerModule,
    NbSelectModule,
    ReactiveFormsModule,
    BrowserModule,
    Ng2SearchPipeModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    AngularMultiSelectModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    ToastrModule.forRoot({ timeOut: 10000 }),
    ThemeModule.forRoot(),
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',

          token: {
            key: 'token'
          },
          errors: {
            key: 'message'
          },
          baseEndpoint: AppComponent.API_URL,
          login: {
            // ...
            endpoint: '/tcUser/logInAdmin',
            redirect: {
              success: '/pages',
              failure: null, // stay on the same page
            },

            defaultErrors: ['Username/Password combination is not correct, please try again.']
          },

        }),
      ],
      forms: {
        login: {
          rememberMe: true,
          strategy: 'email',
          redirectDelay: 0,
          showMessages: {
            success: true,
            error: true,
          },
        },
      }
    }),
    NgbModule,
  ],
  providers: [
    {
      provide: NB_TIME_PICKER_CONFIG,
      useValue: {}
    }
  ],

  exports: [ReactiveFormsModule],
  bootstrap: [AppComponent],
})
export class AppModule {
}
