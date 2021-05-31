import axios from 'axios';

const apiUrl = 'http://localhost:3000';

class ApiService {
  // activities/v1 API
  static async getActivities(page) {
    const url = `${apiUrl}/activities/v1`;

    const activities = await axios
      .get(url, {
        params: {
          page,
        },
      })
      .then(res => res.data);

    return activities;
  }

  // activities/v2 API
  static async getActivitiesV2(page) {
    const url = `${apiUrl}/activities/v2`;

    const activities = await axios
      .get(url, {
        params: {
          page,
        },
      })
      .then(res => res.data);

    return activities;
  }
}

export default ApiService;
