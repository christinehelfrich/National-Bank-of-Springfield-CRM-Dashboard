import httpService from './http.service'

class Summary2DataService {
  async getAll() {
    return await httpService.get('http://localhost:3004/summary2')
  }
}

export default new Summary2DataService()
