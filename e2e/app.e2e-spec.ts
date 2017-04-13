import { AdaptiveInsightsPage } from './app.po';

describe('adaptive-insights App', () => {
  let page: AdaptiveInsightsPage;

  beforeEach(() => {
    page = new AdaptiveInsightsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('ai works!');
  });
});
