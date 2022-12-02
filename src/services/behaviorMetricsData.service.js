import httpService from './http.service'

class BehaviorMetricsDataService {
  async getAll() {
    return await httpService.get('http://localhost:3004/BehaviorMetricsTable')
  }
}

export default new BehaviorMetricsDataService()
