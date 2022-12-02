import httpService from './http.service'

class OpportunitiesSummaryDataService {
  async getAll() {
    return await httpService.get('http://localhost:3004/OpportunitiesSummary')
  }
}

export default new OpportunitiesSummaryDataService()
