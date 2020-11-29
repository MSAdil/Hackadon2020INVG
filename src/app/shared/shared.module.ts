import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {HeaderComponent} from './component/header/header.component';
import {FooterComponent} from './component/footer/footer.component';
import {SidebarComponent} from './component/sidebar/sidebar.component';
import {MatDivider, MatDividerModule} from '@angular/material/divider';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {FlexModule} from '@angular/flex-layout';
import {_MatMenuDirectivesModule, MatMenuModule} from '@angular/material/menu';
import {MatListModule} from '@angular/material/list';
import { RankingComponent } from './widgets/ranking/ranking.component';
import {HighchartsChartModule} from 'highcharts-angular';
import { C02EmissionsComponent } from './widgets/c02-emissions/c02-emissions.component';
import { TraveltimeComponent } from './widgets/traveltime/traveltime.component';
import { TravelledKmsComponent } from './widgets/travelled-kms/travelled-kms.component';
import { NumberoftripsComponent } from './widgets/numberoftrips/numberoftrips.component';
import {AppRoutingModule} from '../app-routing.module';
import {RouterModule} from '@angular/router';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RankingComponent,
    C02EmissionsComponent,
    TraveltimeComponent,
    TravelledKmsComponent,
    NumberoftripsComponent
  ],
  imports: [
    CommonModule,
    MatDividerModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    FlexModule,
    _MatMenuDirectivesModule,
    MatMenuModule,
    MatListModule,
    HighchartsChartModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SidebarComponent,
    RankingComponent,
    C02EmissionsComponent,
    TraveltimeComponent,
    TravelledKmsComponent,
    NumberoftripsComponent
  ]
})
export class SharedModule { }
