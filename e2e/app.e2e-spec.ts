import { ProblemsPage } from './app.po';

describe('problems App', () => {
  let page: ProblemsPage;

  beforeEach(() => {
    page = new ProblemsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
