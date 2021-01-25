import React, { useState, useCallback } from "react"
import Head from 'next/head'
import Link from 'next/link'
import Layout from '../components/layout'
import {Title, SelectUserWidget, SelectList, SelectButton, SelectUserWrapper, LoginPanelImg} from '../components/styled'

const App = () => {
  const [state, setState] = useState({
    user:''
  })

  const selectUser = useCallback((e) => {
    setState({
      ...state,
      user:e.target.value
    })
  }, [])
  return (
    <Layout>
      <Head>
        <title>Boxitas NextJS Chat</title>
        <link rel='icon' href='/favicon.ico' />
        {/*TODO REVISAR SEO*/}
        <meta name="description" content="Boxitas Next Socket.io Chatting app"/>
        <meta name="keywords" content="nextjs, boxitas,react,socket.io,chatting,javascript" />
        <meta name="viewport" content="width=device-width, initial-scale=1"/>
      </Head>
      <SelectUserWrapper>
        <div style={{width: '100%', minHeight: '100vh', display: 'flex', flexWrap: 'wrap', justifyContent: 'center', alignItems: 'center', padding: '15px'}}>
          <SelectUserWidget>
            {/*TODO Adicionar Login curioso; remplazar values con ID*/}
            <LoginPanelImg src='/assets/LiveChat.png'/>
            <Title>¿Quieres comunicar con alguien?</Title>
            <SelectList value={state.user} onChange={(e)=>{selectUser(e)}}>
              <option value="">¿ Quién eres ?</option>
              <option value="Carlos Enrique Casemiro">Carlos Enrique Casemiro</option>
              <option value="Linda Burrow">Linda Burrow</option>
              <option value="Scarlet Johanson">Scarlet Johanson</option>
              <option value="Robert Downey Jr">Robert Downey Jr</option>
              <option value="Marco Aurelio">Marco Aurelio</option>
              <option value="Cardi B">Cardi B</option>
            </SelectList>
            <Link href={`/list?user=${state.user}`} as='/list'>
              <SelectButton disabled={!state.user}>Entrar</SelectButton>
            </Link>
          </SelectUserWidget>
        </div>
      </SelectUserWrapper>
    </Layout>
  )
}

export default App

//TODO Obtener la lista de usuarios del servidor...
/* export async function getStaticProps(){
   return {
     props:{
       name:'Hola'
     }
   }
 }*/