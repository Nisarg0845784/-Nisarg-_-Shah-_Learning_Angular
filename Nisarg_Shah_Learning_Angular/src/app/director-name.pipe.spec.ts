import { DirectorNamePipe } from './director-name.pipe';

describe('DirectorNamePipe', () => {
  it('create an instance', () => {
    const pipe = new DirectorNamePipe();
    expect(pipe).toBeTruthy();
  });
});
