import { render, screen } from '@testing-library/react'
import BenefitCard from '../BenefitCard'

describe('BenefitCard', () => {
  const mockProps = {
    title: 'Test Title',
    description: 'Test Description',
    icon: <div data-testid="test-icon">🚗</div>,
    color: 'bg-green-500',
    delay: 0
  }

  it('renders without crashing', () => {
    expect(() => render(<BenefitCard {...mockProps} />)).not.toThrow()
  })

  it('displays the title correctly', () => {
    render(<BenefitCard {...mockProps} />)
    expect(screen.getByText('Test Title')).toBeInTheDocument()
  })

  it('displays the description correctly', () => {
    render(<BenefitCard {...mockProps} />)
    expect(screen.getByText('Test Description')).toBeInTheDocument()
  })

  it('renders the icon', () => {
    render(<BenefitCard {...mockProps} />)
    expect(screen.getByTestId('test-icon')).toBeInTheDocument()
  })

  it('applies the correct color class', () => {
    render(<BenefitCard {...mockProps} />)
    const card = screen.getByText('Test Title').closest('div')
    expect(card).toHaveClass('hover:border-bg-green-500-200')
  })

  it('has the correct structure', () => {
    render(<BenefitCard {...mockProps} />)
    const card = screen.getByText('Test Title').closest('div')
    expect(card).toHaveClass('bg-white', 'rounded-2xl', 'shadow-xl')
  })
}) 