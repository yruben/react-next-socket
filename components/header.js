import React from 'react'
import PropTypes from 'prop-types'
import Link from 'next/link'
import {HeaderWrap, Title, HeaderPanel, HeaderPanelContents, ChatRoomPanelImg} from './styled'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faChevronLeft } from '@fortawesome/free-solid-svg-icons'

const Header = ({ user, target, targetInfo}) => {
  return (
    <HeaderWrap>
      <HeaderPanel>
          {
            target
            ?
            <Link href={`/list?user=${user}&target=${target}&read=true`} as='/list'>
              <HeaderPanelContents style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={faChevronLeft} style={{width:'1em'}} />
              </HeaderPanelContents>
            </Link>
            :
            <Link href='/'>
              <HeaderPanelContents style={{cursor:'pointer'}}>
                <FontAwesomeIcon icon={faHome} style={{width:'1.5em'}} />
              </HeaderPanelContents>
            </Link>
          }
        <HeaderPanelContents>
          <Title>Charla de {target || user}</Title>
        </HeaderPanelContents>
        <HeaderPanelContents style={{cursor:'pointer'}}>
          {
            targetInfo ? <ChatRoomPanelImg src={targetInfo} /> : <FontAwesomeIcon icon={faUser} style={{width:'1em'}} />
          }
        </HeaderPanelContents>
      </HeaderPanel>
    </HeaderWrap>
  )
}

export default Header

Header.propTypes = {
  user: PropTypes.string,
  target: PropTypes.string,
  targetInfo: PropTypes.any
}