global.fetch = require('node-fetch')

import { server } from '../src/utils/mockServer/server'

beforeAll(() => {
  // fica escutando todas as chamadas nos testes
  server.listen()
})

afterEach(() => {
  // reseta todos os handlers para caso ele seja chamado
  // de novo
  server.resetHandlers()
})

afterAll(() => {
  //fecha o server e limpa os testes
  server.close()
})
