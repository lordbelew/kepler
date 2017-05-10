import { KeplerPage } from './app.po';

describe('kepler App', () => {
  let page: KeplerPage;

  beforeEach(() => {
    page = new KeplerPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('kp works!');
  });
});
