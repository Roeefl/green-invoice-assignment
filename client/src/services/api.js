import axios from 'axios';

const apiURL = 'https://jupiter.d.greeninvoice.co.il/api/v1';

class ApiService {
  static async login(email, password) {
    const response = await axios
      .post(apiURL, {
        email,
        password
      })
      .then(res => res.data);
    console.log("🚀 ~ file: api.js ~ line 13 ~ ApiService ~ login ~ response", response)

    return {};
  }
}

export default ApiService;
