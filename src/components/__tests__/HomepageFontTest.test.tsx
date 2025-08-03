import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'
import Home from '@/app/page'

// Mock the components that might cause issues in testing
jest.mock('@/components/ScrollingBanner', () => {
  return function MockScrollingBanner() {
    return <div data-testid="scrolling-banner">Scrolling Banner</div>
  }
})

jest.mock('@/components/ScarcityNotification', () => {
  return function MockScarcityNotification() {
    return <div data-testid="scarcity-notification">Scarcity Notification</div>
  }
})

jest.mock('@/components/ScarcityCounter', () => {
  return function MockScarcityCounter() {
    return <div data-testid="scarcity-counter">Scarcity Counter</div>
  }
})

jest.mock('@/components/MobileScarcityBanner', () => {
  return function MockMobileScarcityBanner() {
    return <div data-testid="mobile-scarcity-banner">Mobile Scarcity Banner</div>
  }
})

jest.mock('@/components/ScrollZoomCard', () => {
  return function MockScrollZoomCard({ children }: { children: React.ReactNode }) {
    return <div data-testid="scroll-zoom-card">{children}</div>
  }
})

jest.mock('@/components/ConfettiEffect', () => {
  return function MockConfettiEffect() {
    return <div data-testid="confetti-effect">Confetti Effect</div>
  }
})

describe('Homepage Font Integration', () => {
  it('renders main headlines with Gelasio font class', () => {
    render(<Home />)
    
    // Check main hero headline
    const heroHeadline = screen.getByText(/\$0 Out-of-Pocket Install/)
    expect(heroHeadline).toHaveClass('font-gelasio')
    
    // Check section headline
    const sectionHeadline = screen.getByText(/The EV Wave Is Here/)
    expect(sectionHeadline).toHaveClass('font-gelasio')
    
    // Check card headlines
    const exponentialGrowth = screen.getByText('Exponential Growth')
    expect(exponentialGrowth).toHaveClass('font-gelasio')
    
    const infrastructureDemand = screen.getByText('Infrastructure Demand Spike')
    expect(infrastructureDemand).toHaveClass('font-gelasio')
    
    const consumerExpectations = screen.getByText('Consumer Expectations')
    expect(consumerExpectations).toHaveClass('font-gelasio')
  })

  it('maintains other font classes for non-headline text', () => {
    render(<Home />)
    
    // Check that body text still uses other fonts
    const earnText = screen.getByText(/Earn Monthly Passive Income/)
    expect(earnText).toHaveClass('font-poppins')
    
    const descriptionText = screen.getByText(/Boost customer traffic/)
    expect(descriptionText).toHaveClass('font-montserrat')
  })

  it('renders CTA headlines with Gelasio font', () => {
    render(<Home />)
    
    // Check CTA headlines
    const ctaHeadline = screen.getByText(/Don't Get Left Behind/)
    expect(ctaHeadline).toHaveClass('font-gelasio')
    
    const urgencyHeadline = screen.getByText(/LIMITED TIME OFFER/)
    expect(urgencyHeadline).toHaveClass('font-gelasio')
    
    const finalCta = screen.getByText(/Ready to Start Earning/)
    expect(finalCta).toHaveClass('font-gelasio')
  })
}) 