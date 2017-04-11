import { PlainMeanPage } from './app.po';

describe('plain-mean App', () => {
  let page: PlainMeanPage;

  beforeEach(() => {
    page = new PlainMeanPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
