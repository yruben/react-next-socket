import React from 'react'
import PropTypes from 'prop-types'
import { FooterWrap, FooterInput, FooterSendButton } from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

const Footer = ({ sendMessages, debounceMessage, setDebounceMessage }) => {
  return (
    <FooterWrap>
      <FooterInput type="text" 
          maxLength="60"
          placeholder="Deseo decirte que..."
          value={debounceMessage} 
          onChange={({ currentTarget }) => setDebounceMessage(currentTarget.value)} 
          onKeyPress={e => {
            if (e.key === 'Enter') {
              if(!debounceMessage) return
              sendMessages(e.target.value)
            }
          }}
      />
      <FooterSendButton onClick={() => sendMessages()} disabled={!debounceMessage}>
        <FontAwesomeIcon icon={faEnvelope} style={{width:'2em'}} />
      </FooterSendButton>
    </FooterWrap>
  )
}

export default Footer

Footer.propTypes = {
  sendMessages: PropTypes.func.isRequired,
  debounceMessage: PropTypes.string,
  setDebounceMessage: PropTypes.func.isRequired
}