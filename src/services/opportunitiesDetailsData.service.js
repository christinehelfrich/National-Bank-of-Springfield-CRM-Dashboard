import httpService from './http.service'

class OpportunitiesDetailsDataService {
  async getAll() {
    return await httpService.get('http://localhost:3004/OpportunitiesDetails')
  }
}

export default new OpportunitiesDetailsDataService()
