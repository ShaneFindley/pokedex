# Building the Pokedex



## Tasks

Build a self-contained web application in React &
Redux, using the rest API from https://pokeapi.co/
with the following features:   

* Display a list with all the Pokémon   
* Filter the list of the Pokémon by name or 
Pokémon number   
* Be able to see the details of any Pokémon (description, stats, moves, etc.)   
* Add a Pokémon to “My Pokémon” list   
* Remove a Pokémon from “My Pokémon” list  
* View the “My Pokémon” list   
* View details of any entry in “My Pokémon” list   
* The “My Pokémon” should be persistent across page reloads   
   
   
## Deliverables

* A repository with your code (preferably hosted on Github, Gitlab or another publicly accessible git repository)   
* A short readme showing how the code can be run locally
   
   
## What We Care About

* Clean code & architecture
* An “eye” for UI & UX
* Responsive Layout
     
   
## Considerations and Further Options

### Design
* I tried to design the page based on the color pallete of the main pokemon logo, also due to the nature of the product I thought it was better to use a rich colorful design, it might be a little too much but I felt that it fit with the style of the product.
* I would consider additional Icons and autocomplete features on the search filter.   
* Alternatively it would have been nice to have My Pokemon on a separate panel.   

### Technical observations
* Hiding of Redux functionality behind context means that it could be quickly and easilly swapped out however it isn't really necessary. Also the duplication of Providers could quite easilly be replaced with a singular generic HOC.   
* It would be very simple to introduce LESS, SASS or even a more React focused library such as styled components; for simplicity however I stuck to pure css for the time being.   
* I wouldn't advocate using react-materialize, I wanted to make use of it for some of its components such as Select, AutoComplete and simple Buttons, however in hindsight this wasn't necessary and I had many issues with Typescript.   
* Cache and/or lazy load on the images would greatly improve load times as well as avoiding hitting a service with multiple requests. A nice alternative might be to load all of the sprites into a single image map. Currently to avoid issues I have included them in my codebase. 
   
### Testing
* I would like to have done more testing but for now I have included some basic testing.
   
   
![Alt text](/screenshot.png?raw=true "Optional Title")
   
## Running the application
   
### `npm start`

To run the app locally, run npm start.   
Currently Pokemon-Grid.tsx is set to use mocked data on usePokemon.tsx, to switch to retrieve from the api change this to false.

`const pokemon = usePokemon(true); -> const pokemon = usePokemon(false);`

If you want to test purging of the local cache you may also run the page passing the urlParameter purge=true

`http://localhost:3000/?purge=true`