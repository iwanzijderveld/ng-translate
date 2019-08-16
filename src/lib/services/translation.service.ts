import { Injectable } from '@angular/core';
import { Translation } from '../models/translation.model';

/** require() */
declare const require: any;

@Injectable()
export class TranslationService {
  private _translations: Translation[] = new Array<Translation>();
  private _language: string;
  private _jsonTree: Object;

  /**
   * addTranslation
   * Add a file to the language
   */
  public addTranslation(translation: Translation) {
    this._translations.push(translation);
  }

  /**
   * setLanguage
   * @param language: language code on wich the translation will be build
   */
  public setLanguage(language: string) {
    this._language = language;
    this._composeTranslationTree();
  }

  /**
   * composerTranslationTree
   */
  private _composeTranslationTree() {
    const translations = this._translations.filter(t => t.language === this._language);

    if (translations.length === 1) {
      this._jsonTree = require(`src/assets/${translations[0].file}`);
    } else {
      this._jsonTree = new Object();
      translations.forEach(translation => {
        const filename = translation.file.split('/').pop().replace('.json', '');
        this._jsonTree[filename] = require(`src/assets/${translation.file}`);
      });
    }
  }

  /**
   * translate key
   * @param text: key that should be translated
   */
  public translate(text: string): string {
    return this._getTranslation(text);
  }

  /**
   * find the translation or return the search key
   * @param text: key that should be translated
   */
  private _getTranslation(text: string): string {
    const navigation = text.split('.');

    let result: any = this._jsonTree;

    navigation.forEach(key => {

      if (!result) {
        return text;
      }

      result = this._searchKeyInTree(key, result);
    });

    return result ? result : text;

  }

  /**
   * search key in tree
   * @param key: key that should be searched for
   * @param tree: object on which we think the key would exist
   */
  private _searchKeyInTree(key: string, tree: Object): Object | string {
    if (tree.hasOwnProperty(key)) {
      return tree[key];
    }

    return null;
  }

}
