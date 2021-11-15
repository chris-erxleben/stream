import * as React from 'react'
import { FunctionComponent, HTMLProps } from 'react'
import styled from 'styled-components'

interface Props extends HTMLProps<HTMLHeadingElement> {
  variant?: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
}

const StyledHeading = styled.span`
  margin: 0;
`

const Heading: FunctionComponent<Props> = ({
  children,
  variant = 'h1',
  ...props
}) => (
  <StyledHeading as={variant} {...props}>
    {children}
  </StyledHeading>
)

export default Heading
