import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';

/**
 * The HTTP service is not added by default
 * so we need to import it.
 */
import { HttpClientModule } from '@angular/common/http';

/**
 * Import the PokedexService
 */
import { PokedexAppService } from './pokedex-app.service';
import { CapitalizePipe } from './capitalize.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CapitalizePipe
  ],
  imports: [
    BrowserModule,
    CommonModule,
    FormsModule,
    /**
     * Register the HTTP service.
     */
    HttpClientModule
  ],
  /**
   * Register the service as a
   * provider.
   */
  providers: [PokedexAppService],
  entryComponents: [AppComponent],
  bootstrap: [AppComponent]
})
export class AppModule {

}