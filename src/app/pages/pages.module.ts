import { NgModule } from '@angular/core';
import { NbAutocompleteModule, NbButtonGroupModule, NbButtonModule, NbCardModule, NbCheckboxModule, NbDatepickerModule, NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule, NbListModule, NbMenuModule, NbSearchModule, NbSelectModule, NbTimepickerModule, NbTreeGridModule } from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { DashboardModule } from './dashboard/dashboard.module';
import { ECommerceModule } from './e-commerce/e-commerce.module';
import { PagesRoutingModule } from './pages-routing.module';
import { MiscellaneousModule } from './miscellaneous/miscellaneous.module';
import { HasPermissionDirective } from './has-permission.directive';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { NgSelectModule } from '@ng-select/ng-select';
import { NgSelect2Module } from 'ng-select2';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgxPaginationModule } from 'ngx-pagination';
import { NgxSpinnerModule } from 'ngx-spinner';
import { CustomeTableModule } from './custome-table/custome-table.module';
import { ToastrModule } from 'ngx-toastr';
import { GoogleMapsModule } from '@angular/google-maps';
import { AngularMultiSelectModule } from 'angular2-multiselect-dropdown';
import { Ng2OrderModule } from 'ng2-order-pipe';
import { NgxEchartsModule } from 'ngx-echarts';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';
import { TablesRoutingModule } from './tables/tables-routing.module';
import { Ng2SmartTableModule } from 'ng2-smart-table';
import { MatTableModule } from '@angular/material/table';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { HttpClient, HttpClientModule } from '@angular/common/http';


@NgModule({
  imports: [

    LeafletModule,
    PagesRoutingModule,
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
    AngularMultiSelectModule,
    HttpClientModule,
  ],
  declarations: [
    PagesComponent,
    HasPermissionDirective,

  ],
})
export class PagesModule {
}
