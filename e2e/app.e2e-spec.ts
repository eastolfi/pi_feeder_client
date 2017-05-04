import { PiFeederClientPage } from './app.po';

describe('pi-feeder-client App', () => {
  let page: PiFeederClientPage;

  beforeEach(() => {
    page = new PiFeederClientPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
