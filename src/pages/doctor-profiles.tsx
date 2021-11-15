import * as React from 'react'
import { StreamChat } from 'stream-chat'
import {
  Chat,
  Channel,
  ChannelList,
  MessageList,
  MessageInput,
  Thread,
  Window,
} from 'stream-chat-react'
import 'stream-chat-css/dist/css/index.css'
import { useEffect, useState } from 'react'
import styled from 'styled-components'
import BaseHeading from '../components/heading'
import Preview from '../components/steam-components/preview'
import CustomMessageInput from '../components/steam-components/message-input'
import { Helmet } from 'react-helmet'

// Normally these would be environment variables, but for this, I'll just leave them here
const STREAM_KEY = '7gvs7m6t5hxw'
const STREAM_USER_TOKEN =
  'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiam9obi1kb2UifQ.nce66wpmclpJerFfLOlWmsYkOdda-V-04rChFjCpx5s'

const client = StreamChat.getInstance(STREAM_KEY)

const Heading = styled(BaseHeading)`
  font-size: 25px;
  margin-bottom: 20px;
`

const Wrapper = styled.main`
  max-width: 1100px;
  margin-left: 45px;
  margin-right: 45px;
`

const DoctorProfilesPage = () => {
  const [clientReady, setClientReady] = useState(false)

  useEffect(() => {
    const setupClient = async () => {
      try {
        await client.connectUser(
          {
            id: 'john-doe',
            name: 'John Doe',
          },
          STREAM_USER_TOKEN
        )

        setClientReady(true)
      } catch (err) {
        console.error(err)
      }
    }

    void setupClient()
  }, [])

  if (!clientReady) return null

  return (
    <Wrapper>
      <Helmet>
        <title>NWMH - Doctor Profiles</title>
      </Helmet>

      <Heading>Doctor Profiles</Heading>
      <Chat client={client}>
        <ChannelList
          filters={{ type: 'messaging' }}
          options={{ state: true, presence: true, limit: 10 }}
          sort={{ last_message_at: -1 }}
          Preview={Preview}
        />
        <Channel>
          <Window>
            <MessageList />
            <MessageInput Input={CustomMessageInput} />
          </Window>
          <Thread />
        </Channel>
      </Chat>
    </Wrapper>
  )
}

export default DoctorProfilesPage
