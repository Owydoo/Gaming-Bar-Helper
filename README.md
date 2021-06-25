# Gaming Bar Helper

Gaming Bar Helper est un projet d'application native Angular/Electron permettant à un patron de bar gaming de gérer le temps que passent ses clients sur les ordinateurs de l'établissement.
Pour le moment, seule une fonctionnalité de chronomètre par pc est implémentée.

## Ce qui est présent :
- Pouvoir lancer un timer pour chaque PC présent, le mettre en pause et le réinitialiser. Ce timer passe en rouge quand il dépasse une heure.
Il est aussi possible de changer le nom associé à ce PC
![image](https://user-images.githubusercontent.com/36131543/123389405-222d3500-d59a-11eb-8513-3259382891b2.png)


## Comment lancer l'application ?
> Il faudra évidemment `npm install` avant l'étape suivante.

- __Développer sous Angular__ : `ng serve` 
- __Vérifier le résulat sur l'application native en Electron__ : `npm start` <br/> Cette commande va lancer `ng serve` et `npm run electron` en concurrence.
- __Créer le dossier exécutable dans la distrib' de votre choix__ : `npm run package:win`, `npm run package:linux`, `npm run package:osx` ou `npm run package:all`

---
This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 11.2.14.



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

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.
