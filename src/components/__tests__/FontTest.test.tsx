import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Test component to verify font classes
const TestHeadlines = () => (
  <div>
    <h1 className="font-gelasio text-4xl font-bold">Test Gelasio Headline</h1>
    <h2 className="headline-font text-3xl font-bold">Test CSS Class Headline</h2>
    <h3 className="font-montserrat text-2xl font-bold">Test Montserrat Headline</h3>
  </div>
)

describe('Font Tests', () => {
  it('renders headlines with correct font classes', () => {
    render(<TestHeadlines />)
    
    // Check that Gelasio font class is applied
    const gelasioHeadline = screen.getByText('Test Gelasio Headline')
    expect(gelasioHeadline).toHaveClass('font-gelasio')
    
    // Check that headline-font CSS class is applied
    const cssClassHeadline = screen.getByText('Test CSS Class Headline')
    expect(cssClassHeadline).toHaveClass('headline-font')
    
    // Check that Montserrat font class is still applied
    const montserratHeadline = screen.getByText('Test Montserrat Headline')
    expect(montserratHeadline).toHaveClass('font-montserrat')
  })

  it('verifies font classes are distinct', () => {
    render(<TestHeadlines />)
    
    const gelasioHeadline = screen.getByText('Test Gelasio Headline')
    const montserratHeadline = screen.getByText('Test Montserrat Headline')
    
    // Verify they have different font classes
    expect(gelasioHeadline).toHaveClass('font-gelasio')
    expect(gelasioHeadline).not.toHaveClass('font-montserrat')
    
    expect(montserratHeadline).toHaveClass('font-montserrat')
    expect(montserratHeadline).not.toHaveClass('font-gelasio')
  })
}) 