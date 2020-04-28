import axios from "axios";

export default axios.create({
  baseURL: "https://api.yelp.com/v3/businesses",
  headers: {
    Authorization:
      "Bearer IfNkSQXI0ONvZeZijvZ5JujBJ3KukicE7sALg7R_vE5654cVael8XQtmbmJzq_UMDnUKQWFUoLHO4P_3dbJgM65XkdT_t2ifVoWaLMIxjPZuMIaa7jpJI935BNVMXnYx",
  },
});
