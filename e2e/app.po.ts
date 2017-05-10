import { browser, element, by } from 'protractor';

export class KeplerPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('kp-root h1')).getText();
  }
}
