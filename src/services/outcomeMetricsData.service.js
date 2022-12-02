import httpService from './http.service'

class OutcomeMetricsDataService {
  async getAll() {
    return await httpService.get('http://localhost:3004/OutcomeMetricsTable')
  }
}

export default new OutcomeMetricsDataService()
