import { render, screen } from '@testing-library/react';
import Test from './Test';

describe('Test', () => {
  it('render', () => {
    render(<Test />);
    const test = screen.getByText('테스트');
    expect(test).toBeInTheDocument();
  });
});
