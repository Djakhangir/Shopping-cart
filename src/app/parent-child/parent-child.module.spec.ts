import { ParentChildModule } from './parent-child.module';

describe('ParentChildModule', () => {
  let parentChildModule: ParentChildModule;

  beforeEach(() => {
    parentChildModule = new ParentChildModule();
  });

  it('should create an instance', () => {
    expect(parentChildModule).toBeTruthy();
  });
});
