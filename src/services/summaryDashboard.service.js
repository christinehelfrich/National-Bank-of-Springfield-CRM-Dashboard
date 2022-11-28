import httpService from './http.service'

class ProfileDataService {
  async getAll() {
    return await httpService.get('http://jsonplaceholder.typicode.com/todos')
  }
}

export default new ProfileDataService()
