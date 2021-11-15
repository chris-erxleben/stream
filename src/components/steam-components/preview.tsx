import { FunctionComponent } from 'react'
import { ChannelPreviewProps, useChatContext } from 'stream-chat-react'
import * as React from 'react'
import styled, { css } from 'styled-components'
import Card from '../card'
import Profile from '../profile'
import { motion } from 'framer-motion'

const variants = {
  initial: {
    scale: 1,
  },
  hover: {
    scale: 1.05,
    transition: { duration: 0.25, ease: 'easeInOut' },
  },
}

const Wrapper = styled(motion(Card)).attrs({
  variants,
  initial: 'initial',
  whileHover: 'hover',
})`
  padding: 12px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-bottom: 18px;
  transition: background-color 0.15s ease-in-out;

  ${({ isSelected }) =>
    isSelected &&
    css`
      background-color: #4d4e80;
    `}
`

const Image = styled(Profile)`
  width: 60px;
  height: 60px;
  margin-right: 10px;
`

const TextWrapper = styled.div`
  display: flex;
  flex-flow: column;
`

const NameText = styled.span`
  color: #7a7a7a;
  font-weight: bold;
  font-size: 20px;
  margin-bottom: 5px;
  transition: color 0.15s ease-in-out;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: white;
    `}
`

const JobTitleText = styled.span`
  color: #7a7a7a;
  font-size: 12px;
  transition: color 0.15s ease-in-out;

  ${({ isSelected }) =>
    isSelected &&
    css`
      color: white;
    `}
`

const Preview: FunctionComponent<ChannelPreviewProps> = ({
  channel,
  setActiveChannel,
}) => {
  const { channel: activeChannel } = useChatContext()

  const isSelected = channel?.id === activeChannel?.id

  return (
    <Wrapper isSelected={isSelected} onClick={() => setActiveChannel(channel)}>
      <Image src={channel.data?.image} />
      <TextWrapper>
        <NameText isSelected={isSelected}>
          {channel.data?.name || 'Channel'}
        </NameText>
        <JobTitleText isSelected={isSelected}>
          {channel.data?.position}
        </JobTitleText>
      </TextWrapper>
    </Wrapper>
  )
}

export default Preview
