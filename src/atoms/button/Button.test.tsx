import { render, screen } from '@testing-library/react';
import Button from './Button';

describe('Button', () => {
  it('should render the button with the provided label', () => {
    render(<Button label="Click Me!" />);

    const button = screen.getByRole('button', { name: /click me!/i });
    expect(button).toBeInTheDocument();
  });

  it('should render the button with the provided className', () => {
    render(<Button label="Click Me!" className="test-class" />);

    const button = screen.getByRole('button', { name: /click me!/i });
    expect(button).toHaveClass('test-class');
  });

  it('should render the button with the provided type', () => {
    render(<Button label="Submit" type="submit" />);

    const button = screen.getByRole('button', { name: /submit/i });
    expect(button).toHaveAttribute('type', 'submit');
  });

  it('should render the button with type "button" by default', () => {
    render(<Button label="Click Me!" />);

    const button = screen.getByRole('button', { name: /click me!/i });
    expect(button).toHaveAttribute('type', 'button');
  });
});
