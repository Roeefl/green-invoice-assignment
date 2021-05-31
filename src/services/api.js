import axios from 'axios';

const apiURL = 'https://jupiter.d.greeninvoice.co.il/api/v1';

class ApiService {
  static async getActivities(page) {
    const url = `${apiURL}/`;

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
