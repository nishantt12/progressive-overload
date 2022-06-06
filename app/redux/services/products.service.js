import axios from "axios";

function service() {
  const getAllProducts = () => {
    console.log("inside getAllProducts")
    return axios.get("https://api.github.com/users/nishantt12/repos")
      .then((res) => res.data)
      .catch(err => err);
  };

  console.log(getAllProducts)

  return {
    getAllProducts,
  };
}

const productsService = service();

export default productsService;
