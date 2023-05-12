import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UsersRoutingModule } from './users-routing.module';
import { UserListComponent } from './user-list/user-list.component';
import { UserComponent } from './user/user.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NbCardModule, NbIconModule, NbButtonModule, NbToastrModule, NbInputModule, NbSelectModule, NbMenuModule, NbDialogModule, NbAutocompleteModule, NbLayoutModule, NbButtonGroupModule, NbSearchModule, NbTreeGridModule, NbCheckboxModule, NbListModule, NbDatepickerModule, NbTimepickerModule, NbFormFieldModule } from '@nebular/theme';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ThemeModule } from '../../@theme/theme.module';
import { CustomeTableModule } from '../custome-table/custome-table.module';
import { NgxSpinnerModule } from 'ngx-spinner';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { DashboardModule } from '../dashboard/dashboard.module';
import { ECommerceModule } from '../e-commerce/e-commerce.module';
import { MiscellaneousModule } from '../miscellaneous/miscellaneous.module';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelect2Module } from 'ng-select2';
import { ToastrModule } from 'ngx-toastr';
import { ClipboardModule } from '@angular/cdk/clipboard';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';

@NgModule({
  declarations: [UserListComponent, UserComponent],
  imports: [
    CommonModule,
    UsersRoutingModule,
    NbCardModule,
    NgxPaginationModule,
    NbIconModule,
    ThemeModule,
    ReactiveFormsModule,
    MatButtonToggleModule,
    Ng2SearchPipeModule,
    FormsModule,
    NbButtonModule,
    NbToastrModule,
    NbInputModule,
    NbSelectModule,
    CustomeTableModule,
    NgxSpinnerModule,
    Ng2OrderModule,
    ClipboardModule,
    ThemeModule,
    NbMenuModule,
    DashboardModule,
    ECommerceModule,
    MiscellaneousModule,
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
    AngularMultiSelectModule,
    HttpClientModule,
    NbFormFieldModule,
  ]
})
export class UsersModule { }
