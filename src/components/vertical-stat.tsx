import * as React from 'react'
import { cloneElement, FunctionComponent } from 'react'
import styled from 'styled-components'
import { FaExpandAlt } from '@react-icons/all-files/fa/FaExpandAlt'

interface Props {
  icon: JSX.Element
  message: string
  stat: string
  imageSrc?: string
  isDark?: boolean
  messageColor?: string
}

const Wrapper = styled.div`
  display: flex;
  flex-flow: column;
  height: 100%;
`

const IconWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 32px;
  height: 32px;
  border-radius: 50%;
  background-color: #f1f1f1;
  flex-shrink: 0;
`

const TextWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

const StatText = styled.span`
  font-size: 28px;
  font-weight: bold;
  color: ${({ isDark }) => (isDark ? 'white' : '#0f063e')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const MessageText = styled.span`
  color: ${({ color, isDark }) => color || (isDark ? 'white' : '#c1c1c1')};
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
`

const Image = styled.img`
  width: auto;
  height: 153.5px;
`

const TopWrapper = styled.div`
  display: flex;
  flex-flow: column;
  flex: 1 0 auto;
  justify-content: space-between;
`

const ImageWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`

const VerticalStat: FunctionComponent<Props> = ({
  icon,
  message,
  stat,
  imageSrc,
  messageColor,
  isDark = false,
}) => {
  const iconWithProps = icon
    ? cloneElement(icon, {
        size: '25px',
        color: isDark ? 'white' : '#0f063e',
      })
    : null

  return (
    <Wrapper>
      <TopWrapper>
        {iconWithProps}
        <StatText isDark={isDark}>{stat}</StatText>
        <TextWrapper>
          <MessageText isDark={isDark} color={messageColor}>
            {message}
          </MessageText>
          <IconWrapper>
            {<FaExpandAlt size="12px" color="#0f0543" />}
          </IconWrapper>
        </TextWrapper>
      </TopWrapper>
      <ImageWrapper>
        {imageSrc && (
          <Image src={imageSrc} alt="Accompanying statistic imagery" />
        )}
      </ImageWrapper>
    </Wrapper>
  )
}

export default VerticalStat
