import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import {
  MatToolbarModule,
  MatListModule,
  MatInputModule,
  MatDatepickerModule,
  MatNativeDateModule,
  MatSelectModule,
  MatFormFieldModule,
  MatRadioModule,
  MatAutocompleteModule,
  MatButtonModule,
  MatCardModule,
  MatGridListModule,
  MatIconModule
  } from '@angular/material';
import { RouterModule, Routes, Router } from '@angular/router';
import { FlexLayoutModule } from '@angular/flex-layout';
import { AppComponent } from './app.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SearchPanelComponent } from './search-panel/search-panel.component';
import { FormsModule, ReactiveFormsModule  } from '@angular/forms';
import {MatIconRegistry} from '@angular/material';
import { MyDataService } from './services/my-data.service';
import { SearchResultsComponent } from './search-results/search-results.component';
import { HotelsComponent } from './hotels/hotels.component';

const appRoutes: Routes = [
  { path: 'searchResults', component: SearchResultsComponent},
  { path: 'home', component: SearchPanelComponent },
  { path: 'hotel', component: HotelsComponent },
  { path: '', redirectTo: 'home', pathMatch: 'full' }
]

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SearchPanelComponent,
    SearchResultsComponent,
    HotelsComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    MatToolbarModule,
    MatListModule,
    MatInputModule,
    MatDatepickerModule,
    MatNativeDateModule,
    FlexLayoutModule,
    MatSelectModule,
    FormsModule,
    ReactiveFormsModule,
    MatFormFieldModule,
    MatRadioModule,
    MatAutocompleteModule,
    MatButtonModule,
    MatCardModule,
    MatGridListModule,
    MatIconModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [MyDataService, MatIconRegistry],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(mdIconRegistry: MatIconRegistry) {
    mdIconRegistry.registerFontClassAlias('fontawesome', 'fa');
  }
}
