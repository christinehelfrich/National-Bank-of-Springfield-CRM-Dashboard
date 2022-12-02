import httpService from './http.service'

class ProfileDataService {
  async getAll() {
    // check variable names
    return await httpService.get('http://localhost:3004/user') // specify user here by id not index
  }
}

export default new ProfileDataService()
