import * as React from 'react'
import { cloneElement, FunctionComponent } from 'react'
import styled from 'styled-components'

interface Props {
  icon: JSX.Element
  message: string
  stat: string
}

const Wrapper = styled.div`
  display: flex;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: #444679;
`

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
  justify-content: center;
  margin-left: 12px;
`

const StatText = styled.span`
  font-weight: bold;
  font-size: 20px;
  margin-top: -3px;
`

const MessageText = styled.span`
  font-size: 12px;
`

const HorizontalStat: FunctionComponent<Props> = ({ icon, message, stat }) => {
  const iconWithProps = icon
    ? cloneElement(icon, {
        size: '20px',
        color: 'white',
      })
    : null

  return (
    <Wrapper>
      <IconWrapper>{iconWithProps}</IconWrapper>
      <TextWrapper>
        <MessageText>{message}</MessageText>
        <StatText>{stat}</StatText>
      </TextWrapper>
    </Wrapper>
  )
}

export default HorizontalStat
