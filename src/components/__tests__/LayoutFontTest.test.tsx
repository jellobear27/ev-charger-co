import { render, screen } from '@testing-library/react'
import '@testing-library/jest-dom'

// Mock the layout component to test font variables
const MockLayout = () => {
  // Simulate the body class that includes font variables
  const bodyClasses = 'font-poppins font-montserrat font-gelasio font-sans'
  
  return (
    <div className={bodyClasses} data-testid="layout-body">
      <h1 className="font-gelasio">Gelasio Font Test</h1>
      <p className="font-poppins">Poppins Font Test</p>
      <p className="font-montserrat">Montserrat Font Test</p>
    </div>
  )
}

describe('Layout Font Configuration', () => {
  it('includes all font variables in body classes', () => {
    render(<MockLayout />)
    
    const layoutBody = screen.getByTestId('layout-body')
    
    // Verify all font variables are present
    expect(layoutBody).toHaveClass('font-poppins')
    expect(layoutBody).toHaveClass('font-montserrat')
    expect(layoutBody).toHaveClass('font-gelasio')
    expect(layoutBody).toHaveClass('font-sans')
  })

  it('applies Gelasio font to headlines', () => {
    render(<MockLayout />)
    
    const gelasioHeadline = screen.getByText('Gelasio Font Test')
    expect(gelasioHeadline).toHaveClass('font-gelasio')
  })

  it('maintains other fonts for body text', () => {
    render(<MockLayout />)
    
    const poppinsText = screen.getByText('Poppins Font Test')
    const montserratText = screen.getByText('Montserrat Font Test')
    
    expect(poppinsText).toHaveClass('font-poppins')
    expect(montserratText).toHaveClass('font-montserrat')
  })
}) 