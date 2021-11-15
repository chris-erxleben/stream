import * as React from 'react'
import { FunctionComponent } from 'react'
import styled, { css } from 'styled-components'
import { motion } from 'framer-motion'

interface Props {
  showDot?: boolean
  dotColor?: string
  dotBottomOffset?: string
  dotLeftOffset?: string
  icon: JSX.Element
}

const dotVariants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.3,
    transition: { duration: 0.5, repeat: Infinity, repeatType: 'mirror' },
  },
}

const Wrapper = styled(motion.div).attrs({
  initial: 'initial',
  whileHover: 'hover',
  whileFocus: 'hover',
})`
  height: 21px;
  width: 21px;
`

const Dot = styled(motion.div).attrs({ variants: dotVariants })`
  position: relative;
  left: 16px;
  width: 6px;
  height: 6px;
  background-color: ${({ $backgroundColor }) => $backgroundColor || '#f8bdc7'};
  border-radius: 50%;
  border: 1px solid white;

  ${({ bottom }) =>
    bottom &&
    css`
      bottom: ${bottom};
    `}

  ${({ left }) =>
    left &&
    css`
      left: ${left};
    `}
`

const IconNotification: FunctionComponent<Props> = ({
  showDot = false,
  dotColor,
  dotBottomOffset,
  dotLeftOffset,
  icon,
  ...props
}) => (
  <Wrapper tabIndex="0" {...props}>
    {icon}
    {showDot && (
      <Dot
        $backgroundColor={dotColor}
        bottom={dotBottomOffset}
        left={dotLeftOffset}
      />
    )}
  </Wrapper>
)

export default IconNotification
