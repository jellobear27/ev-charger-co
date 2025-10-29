import { render, screen } from '@testing-library/react'
import ScrollingBanner from '../ScrollingBanner'

describe('ScrollingBanner', () => {
  it('renders without crashing', () => {
    expect(() => render(<ScrollingBanner />)).not.toThrow()
  })

  it('displays professional value messages', () => {
    render(<ScrollingBanner />)
    expect(screen.getAllByText(/ATTRACT NEW CUSTOMERS/)).toHaveLength(4)
    expect(screen.getAllByText(/DRIVE BUSINESS OPPORTUNITIES/)).toHaveLength(4)
    expect(screen.getAllByText(/SUPPORT SUSTAINABLE MOBILITY/)).toHaveLength(4)
  })

  it('has the correct CSS classes', () => {
    render(<ScrollingBanner />)
    const banner = screen.getAllByText(/ATTRACT NEW CUSTOMERS/)[0].closest('div').parentElement
    expect(banner).toHaveClass('bg-gradient-to-r', 'from-blue-700', 'via-purple-700', 'to-blue-700', 'text-white')
  })

  it('has the scrolling animation class', () => {
    render(<ScrollingBanner />)
    const animatedElement = screen.getAllByText(/ATTRACT NEW CUSTOMERS/)[0].closest('.animate-scroll')
    expect(animatedElement).toBeInTheDocument()
  })

  it('displays business-focused messaging', () => {
    render(<ScrollingBanner />)
    expect(screen.getAllByText(/Deliver the best charging experience to all your loyal & new customers/)).toHaveLength(4)
    expect(screen.getAllByText(/Become a go-to spot for companies/)).toHaveLength(4)
    expect(screen.getAllByText(/Contribute to a cleaner future/)).toHaveLength(4)
  })
}) 