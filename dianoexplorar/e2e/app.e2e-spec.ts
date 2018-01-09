import { DianoexplorarPage } from './app.po';

describe('dianoexplorar App', function() {
  let page: DianoexplorarPage;

  beforeEach(() => {
    page = new DianoexplorarPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
