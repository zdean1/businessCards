https://github.com/zdean1/businessCards

login: chandlergegg@gmail.com
password: 5DeepBreaths!

Once logged in, user will get redirectd to the main page where business cards are displayed. 
To add a new business card, click on the 'Add New Card' button in the navigation header.
    On the newCard page, can add new cards via the form.
    *'Use Webcam' button is disabled and not implemented*
Once the user clicks 'Add Card', will be redirected back to the home page and the new card will be displayed.
To remove a card, click 'Remove Card' button on the desired card to be removed.
To update a card, click on the 'Update Card' button.
    On clicking the button, the user will be redirecte to an update page, where a form can be filled out. 
Once the user clicks, 'Update', they will be redirected back to the homepage and the card will be updated*
    *This update action will delete the original card to be updated and create a new card in that cards place*
User can log out via the 'Logout' button at the top right of the page.

Known bugs: 'Update Card' is not a true update. I had trouble getting the existing cards information from firestore and updating that information.

Could not get hosting to work. Followed Firebase Hosting procedure but website only displays the initial welcome screen.
https://businesscardsapp-ec118.firebaseapp.com/


_______________________________________________________________________________________________________________________________


# BusinessCards

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.2.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--prod` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
