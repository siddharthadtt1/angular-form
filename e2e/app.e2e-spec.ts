import { TestFormsPage } from './app.po';

describe('test-forms App', () => {
  let page: TestFormsPage;

  beforeEach(() => {
    page = new TestFormsPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
