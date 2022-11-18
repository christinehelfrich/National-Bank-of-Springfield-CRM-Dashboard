import httpService from './http.service'

class ToDosDataService {
  async getAll() {
    return await httpService.get('http://jsonplaceholder.typicode.com/todos')
  }
}

export default new ToDosDataService()
