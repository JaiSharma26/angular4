import { InventionsHubPage } from './app.po';

describe('inventions-hub App', function() {
  let page: InventionsHubPage;

  beforeEach(() => {
    page = new InventionsHubPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
