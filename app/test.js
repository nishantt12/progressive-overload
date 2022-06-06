import axios from "axios";


export function testFetch() {
  return axios.get(  "https://api.github.com/users/nishantt12/repos")
  .then((res) => console.log(res.data))
  .catch(err => console.log(err));

}

