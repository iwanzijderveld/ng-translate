# Installation
You can install the package with yarn or npm
`yarn add @insanetlabs/translate` or `npm i @insanetlabs/translate`


# Usage
## 1.Import the module
Add `TranslationModule` to your root module.

```javascript
import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {TranslationModule} from '@insanetlabs/translate';

@NgModule({
    imports: [
        BrowserModule,
        TranslationModule,
        ...
    ],
    bootstrap: [AppComponent]
})
export class AppModule { }
```

## 2. Initialize **TranslationService**
You usually want to initialize the TranslationSerice in the root component of your application.
```javascript
import { Component } from '@angular/core';
import { TranslationService } from '@insanetlabs/translate';

@Component({
})
export class AppComponent {
    constructor(private _translationService: TranslationService) {
        ...
    }
}
```
In here you can provide the application with the translation files.
```javascript
import { TranslationService, Translation } from '@insanetlabs/translate';
    ...
     constructor(private _translationService: TranslationService) {
        const englishTranslation = new Translation('path/to/file.json', 'en');
        this._translationService.addTranslation(englishTranslation);

        this._translationService.setLanguage('en');
    }
```
It's import the function `setLanguage()` is called after the files have been added to the service.
The **TranslationService** will include the files from the assets folder.
In this case the path of where `file.json` would be loaded from is `src/assets/path/to`

## 3. Defining the translations
`path/to/file.json`
An example of the translation file.
```json
{
    "messages": {
        "hello": "Hello world!"
    }
}
```

## 4. Retrieving the translation
If you want to display Hello world! you can get the translation by navigating to the translation using the '.' notation.
In this case 'messages.hello'. You can retrieve the translation using either the function `translate('messagess.hello')` from the **TranslationService**, or using the translate pipe: `{{ 'messages.hello' | translate }}`

# Multiple language files
If you want to seperate your translations in multiple file, you can provide multiple files for a single lanugage.
The name of the file will be used as the first object in the tree.
Lets say you have provided two files in the root component of your app named `projects` and `orders`.

`projects`
```javascript
{
    "title": "Projects"
}
```
`order`
```javascript
{
    "title": "Orders"
}
```

If you want to get the title of the projects file they key would look like this ` {{ 'projects.title' | translate }}`