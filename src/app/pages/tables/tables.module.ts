import { NgModule } from '@angular/core';
import { NbCardModule, NbIconModule, NbInputModule, NbTreeGridModule } from '@nebular/theme';
import { Ng2SmartTableModule } from 'ng2-smart-table';

import { ThemeModule } from '../../@theme/theme.module';
import { TablesRoutingModule, routedComponents } from './tables-routing.module';
import { FsIconComponent } from './tree-grid/tree-grid.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { GMapComponent } from './g-map/g-map.component';
import { GoogleMapsModule } from '@angular/google-maps';
import { NgxEchartsModule } from 'ngx-echarts';
import { SearchComponent } from './search/search.component';
import { LeafletModule } from '@asymmetrik/ngx-leaflet';


@NgModule({
  imports: [
    LeafletModule,
    GoogleMapsModule,
    NgxEchartsModule,
    NbCardModule,
    NbCardModule,
    NbTreeGridModule,
    NbIconModule,
    NbInputModule,
    ThemeModule,
    TablesRoutingModule,
    Ng2SmartTableModule,
    ReactiveFormsModule,
    MatTableModule,
    MatIconModule,
    MatButtonModule,
    FormsModule
 
],
  declarations: [
    ...routedComponents,
    FsIconComponent,
   
    GMapComponent,
    SearchComponent,
  ],
})
export class TablesModule { }
