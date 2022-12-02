import httpService from './http.service'

class Summary1DataService {
  async getAll() {
    return await httpService.get('http://localhost:3004/summary1')
  }
}

export default new Summary1DataService()
