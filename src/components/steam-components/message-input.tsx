import { FunctionComponent } from 'react'
import {
  MessageInputProps,
  useChannelActionContext,
  useChannelStateContext,
} from 'stream-chat-react'
import * as React from 'react'
import BaseTextInput from '../text-input'
import styled from 'styled-components'
import { FaRegPaperPlane } from '@react-icons/all-files/fa/FaRegPaperPlane'

const TextInput = styled(BaseTextInput).attrs({
  width: 'calc(100% - 10px)',
  height: '45px',
  iconLeft: 'calc(100% - 49px)',
  iconBottom: '38px',
  iconColor: 'white',
})`
  :placeholder-shown {
    font-style: italic;
  }
`

const Wrapper = styled.div`
  position: relative;
  bottom: 30px;
  left: 5px;
`

const IconWrapper = styled.div`
  width: 32px;
  height: 32px;
  background-color: #4d4e80;
  border-radius: 50%;
  transition: background-color 0.15s ease-in-out;

  :hover {
    background-color: #f8bdc7;
  }
`

const Icon = styled(FaRegPaperPlane).attrs({
  color: 'white',
  size: '18px',
})`
  position: relative;
  top: 7px;
  left: 5px;
`

const MessageInput: FunctionComponent<MessageInputProps> = () => {
  const { sendMessage } = useChannelActionContext()
  const { channel } = useChannelStateContext()

  const handleSubmit = (text: string) => sendMessage({ text })

  return (
    <Wrapper>
      <TextInput
        placeholder={`Type your message to ${channel?.data?.name}`}
        onSubmit={handleSubmit}
        icon={
          <IconWrapper>
            <Icon />
          </IconWrapper>
        }
      />
    </Wrapper>
  )
}

export default MessageInput
