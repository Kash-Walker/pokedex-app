import { Component } from '@angular/core';

/**
 * Import the Pokedex service.
 */
import { PokedexAppService } from './pokedex-app.service';

/**
 * Import the Pokemon class
 */
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  /**
   * The component maintains
   * a list of Pokemon objects
   * that will be rendered.
   *
   * We initialize it to an empty
   * list.
   */
  pokemon: Pokemon[] = [];

  /**
   * A boolean that represents
   * if we are currently loading data.
   */
  isLoading: boolean = false;

  /**
   * This boolean will be set
   * to true if an error occurred.
   */
  error: boolean = false;

  /**
   * Inject the Pokedex service.
   */
  constructor(private pokedexService: PokedexAppService) { }

  /**
   * A lifecycle method
   * that is automatically
   * envoked when the component
   * is created.
   */
  ngOnInit() {
    /**
     * Load the initial data.
     * loads the next 9 pokemon from the API and sets imageLoaded to false
     */
    this.loadMore();
  }

  loadMore() {
    this.isLoading = true;

    /**
     * Use the Pokedex service
     * to load the next 9 Pokemon.
     */
    this.pokedexService.getPokemon(this.pokemon.length, 9)
      .then(pokemon => {
        pokemon = pokemon.map(p => {
          p.imageLoaded = false;
          return p;
        });
                /**
         * If loading was successful
         * we append the result to the list.
         */
        this.pokemon = this.pokemon.concat(pokemon);
        this.isLoading = false;
        this.error = false;
      })
      .catch(() => {
        this.error = true;
        this.isLoading = false;
      });
  }
}