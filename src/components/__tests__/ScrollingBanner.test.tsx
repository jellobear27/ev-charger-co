import { render, screen } from '@testing-library/react'
import ScrollingBanner from '../ScrollingBanner'

describe('ScrollingBanner', () => {
  it('renders without crashing', () => {
    expect(() => render(<ScrollingBanner />)).not.toThrow()
  })

  it('displays scarcity messages', () => {
    render(<ScrollingBanner />)
    expect(screen.getAllByText(/LIMITED SPOTS/)).toHaveLength(3)
    expect(screen.getAllByText(/FREE INSTALLATION AVAILABLE/)).toHaveLength(3)
    expect(screen.getAllByText(/\$0 SETUP COST/)).toHaveLength(3)
  })

  it('has the correct CSS classes', () => {
    render(<ScrollingBanner />)
    const banner = screen.getAllByText(/LIMITED SPOTS/)[0].closest('div').parentElement
    expect(banner).toHaveClass('bg-gradient-to-r', 'from-red-600', 'via-orange-600', 'to-red-600', 'text-white')
  })

  it('has the scrolling animation class', () => {
    render(<ScrollingBanner />)
    const animatedElement = screen.getAllByText(/LIMITED SPOTS/)[0].closest('.animate-scroll')
    expect(animatedElement).toBeInTheDocument()
  })

  it('displays dynamic spot count', () => {
    render(<ScrollingBanner />)
    expect(screen.getAllByText(/spots left in your area/)).toHaveLength(3)
  })
}) 