import { browser, element, by } from 'protractor';

export class AdaptiveInsightsPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('ai-root h1')).getText();
  }
}
