import axios from 'axios';

const apiURL = 'http://localhost:1337';

class ApiService {
  static async login(email, password) {
    const url = `${apiURL}/login`;

    const response = await axios
      .post(url, {
        email,
        password
      })
      .then(res => res.data);

    const { isError, errorMessage, user } = response || {};
    if (isError) {
      alert(errorMessage);
      return false;
    }

    return user;
  }
}

export default ApiService;
