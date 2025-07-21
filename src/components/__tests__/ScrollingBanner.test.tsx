import { render, screen } from '@testing-library/react'
import ScrollingBanner from '../ScrollingBanner'

describe('ScrollingBanner', () => {
  it('renders without crashing', () => {
    expect(() => render(<ScrollingBanner />)).not.toThrow()
  })

  it('displays the banner text', () => {
    render(<ScrollingBanner />)
    expect(screen.getAllByText(/Bring more traffic to your business with EV chargers/)).toHaveLength(2)
  })

  it('has the correct CSS classes', () => {
    render(<ScrollingBanner />)
    const banner = screen.getAllByText(/Bring more traffic to your business with EV chargers/)[0].closest('div').parentElement
    expect(banner).toHaveClass('bg-gradient-to-r', 'from-green-600', 'to-blue-600', 'text-white')
  })

  it('has the scrolling animation class', () => {
    render(<ScrollingBanner />)
    const animatedElement = screen.getAllByText(/Bring more traffic to your business with EV chargers/)[0].closest('.animate-scroll')
    expect(animatedElement).toBeInTheDocument()
  })
}) 