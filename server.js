const express = require('express')
const http = require('http')
const socketIO = require('socket.io')
const port = 3001
const app = express()
const server = http.createServer(app)
const io = socketIO(server)

let data = [
  {
    id: 'Carlos Enrique Casemiro',
    contents:[
      {
        name:'Linda Burrow',
        picture: '/assets/images/LB.jpg',
        endedAt:1580357729003,
        messages:[
          {
            user:'Linda Burrow',
            message:'Dónde estás?',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',
            message:'Estoy comiendo.',
            isRead:true
          },
          {
            user:'Linda Burrow',
            message:'Cuando vienes?',
            isRead:false
          },
          {
            user:'Linda Burrow',
            message:'Necesito verte urgente...',
            isRead:false
          }
        ]
      },
      {
        name: 'Abraham Lincoln',
        picture: '/assets/images/AL.jpg',
        endedAt:1580455264061,
        messages:[
          {
            user:'Abraham Lincoln',
            message:'Presidente',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',
            message:'Si?',
            isRead:true
          },
          {
            user:'Abraham Lincoln',
            message:'Compra un poco de vino en el camino!',
            isRead:false
          }
        ]
      },
      {
        name: 'Scarlet Johanson',
        picture: '/assets/images/SJ.jpg',
        endedAt:1580791165818,
        messages:[
          {
            user:'Carlos Enrique Casemiro',
            message:'Momia',
            isRead:true
          },
          {
            user:'Scarlet Johanson',
            message:'QUEEE?',
            isRead:true
          },
          {
            user:'Scarlet Johanson',
            message:'Por favor habla!',
            isRead:false
          }
        ]
      },
      {
        name: 'Robert Downey Jr',
        picture: '/assets/images/RDJ.jpg',
        endedAt:1580435264061,
        messages:[
          {
            user:'Carlos Enrique Casemiro',
            message:'El mismo de siempre',
            isRead:true
          },
          {
            user:'Robert Downey Jr',
            message:'Si?',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',
            message:'Estas teniendo buenas vacaciones?',
            isRead:true
          }
        ]
      },
      {
        name: 'Marco Aurelio',
        picture: '/assets/images/IA.jpg',
        endedAt:1580436264061,
        messages:[
          {
            user:'Carlos Enrique Casemiro',
            message:'Marco Aurelio dígame...',
            isRead:true
          },
          {
            user:'Marco Aurelio',
            message:'Si?',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',
            message:'Cómo está tu salud?',
            isRead:true
          }
        ]
      },
      {
        name: 'Cardi B',
        picture: '/assets/images/CB.jpg',
        endedAt:1580136264061,
        messages:[
          {
            user:'Cardi B',
            message:'Buenos días!',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',
            message:'Eres nueva?',
            isRead:true
          },
          {
            user:'Cardi B',
            message:'Sí por favor, ayúdame.',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',
            message:'Bienvenida :D',
            isRead:true
          },
        ]
      }
    ],
  },
  {
    id: 'Linda Burrow',//장만월 사장님
    contents:[
      {
        name:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
        picture: '/assets/images/CEC.jpg',
        endedAt:1580357729003,
        messages:[
          {
            user:'Linda Burrow',//장만월 사장님
            message:'Dónde estás??',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
            message:'Estoy comiendo.',
            isRead:true
          },
          {
            user:'Linda Burrow',//장만월 사장님
            message:'Cuándo vienes?',
            isRead:true
          },
          {
            user:'Linda Burrow',//장만월 사장님
            message:'Necesito verte urgente...',
            isRead:true
          }
        ]
      }
    ]
  },
  {
    id: 'Abraham Lincoln',//신정근 바텐더
    contents:[
      {
        name:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
        picture: '/assets/images/CEC.jpg',
        endedAt:1580455264061,
        messages:[
          {
            user:'Abraham Lincoln',//신정근 바텐더
            message:'Presidente',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
            message:'Si?',
            isRead:true
          },
          {
            user:'Abraham Lincoln',//신정근 바텐더
            message:'Compra un poco de vino en el camino!',
            isRead:true
          }
        ]
      }
    ]
  },
  {
    id: 'Scarlet Johanson',//이미라 의사
    contents:[
      {
        name:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
        picture: '/assets/images/CEC.jpg',
        endedAt:1580791165818,
        messages:[
          {
            user:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
            message:'Momia',
            isRead:true
          },
          {
            user:'Scarlet Johanson',//이미라 의사
            message:'QUEEE?',
            isRead:true
          },
          {
            user:'Scarlet Johanson',//이미라 의사
            message:'Por favor habla!',
            isRead:true
          }
        ]
      }
    ]
  },
  {
    id: 'Robert Downey Jr',//구찬성 지배인
    contents:[
      {
        name:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
        picture: '/assets/images/CEC.jpg',
        endedAt:1580435264061,
        messages:[
          {
            user:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
            message:'El mismo de siempre',
            isRead:true
          },
          {
            user:'Robert Downey Jr',//구찬성 지배인
            message:'Si?',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
            message:'Estas teniendo buenas vacaciones?',
            isRead:true
          }
        ]
      }
    ]
  },
  {
    id: 'Marco Aurelio',//노준석 총지배인
    contents:[
      {
        name:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
        picture: '/assets/images/CEC.jpg',
        endedAt:1580435864061,
        messages:[
          {
            user:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
            message:'Marco Aurelio dígame...',//노준석 총지배인
            isRead:true
          },
          {
            user:'Marco Aurelio',//노준석 총지배인
            message:'Si?',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
            message:'Cómo está tu salud?',
            isRead:true
          }
        ]
      }
    ]
  },
  {
    id: 'Cardi B',//김유나 인턴
    contents:[
      {
        name:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
        picture: '/assets/images/CEC.jpg',
        endedAt:1580136264061,
        messages:[
          {
            user:'Cardi B',//김유나 인턴
            message:'Buenos días!',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
            message:'Eres nueva?',
            isRead:true
          },
          {
            user:'Cardi B',//김유나 인턴
            message:'Sí por favor, ayúdame.',
            isRead:true
          },
          {
            user:'Carlos Enrique Casemiro',    // id: '최준원 회장님',
            message:'Bienvenida :D',
            isRead:true
          },
        ]
      }
    ]
  }
]

io.on('connection', socket => {

  socket.on('send message', (user, target, msg, isPicture) => {
    const copyData = [...data]
    const newDate = + new Date()

    copyData.forEach(v => {
      if(v.id === user){
        v.contents.forEach(key => {
          if(key.name === target){
            key.endedAt = newDate
            key.messages.push({
              user: user,
              message: isPicture === true ? '' : msg,
              picture: isPicture === true ? msg : '',
              isRead: true
            })
          }
        })
      } else if (v.id === target) {
        v.contents.forEach(key => {
          if(key.name === user){
            key.endedAt = newDate
            key.messages.push({
              user: user,
              message: isPicture === true ? '' : msg,
              picture: isPicture === true ? msg : '',
              isRead: false
            })
          }
        })
      }
    })

    const targetData = copyData.filter(v => v.id === user)[0]
    const targetMessages = targetData ? targetData.contents.filter(value => value.name === target)[0].messages : []
    io.sockets.emit('receive message', targetMessages)

    const reduceTargetData = copyData.filter(v => v.id === target)[0]
    socket.broadcast.emit('receive data', reduceTargetData)
  })

  socket.on('receive data', (user) => {
    const newData = data.filter(v => v.id === user)[0]
    io.sockets.to(socket.id).emit('receive data', newData)
  })

  socket.on('receive message', (user, target) => {
    const targetData = data.filter(v => v.id === user)[0]
    const targetMessages = targetData ? targetData.contents.filter(value => value.name === target)[0].messages : []
    io.sockets.emit('receive message', targetMessages)
  })

  socket.on('read message', (user, target) => {
    const copyData = [...data]
    const userIdx = copyData.findIndex(v => v.id === user)
    if(userIdx !== -1){
      copyData[userIdx].contents = copyData[userIdx].contents.map(key => {
        if(key.name === target){
          key.messages.forEach(value => {
            if(value.user === target) value.isRead = true
          }) 
        }
        return key
      })
      // copyData[userIdx].contents = mappingData
    }

    const newData = copyData.filter(v => v.id === user)[0]
    io.sockets.to(socket.id).emit('receive data', newData)
  })

  socket.on('disconnect', () => {
    console.log('user disconnected!')
  })
})

server.listen(port, () => console.log(`Listening on port ${port}`))