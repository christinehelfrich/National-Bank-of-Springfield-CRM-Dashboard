import httpService from './http.service'

class ClientDataService {
  async getAll() {
    return await httpService.get('http://localhost:3004/client')
  }
}

export default new ClientDataService()
