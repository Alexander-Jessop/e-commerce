import { useQuery } from "react-query";
import axios from "axios";

const useFakeStoreApi = (apiUrl) => {
  const fetchApiData = async () => {
    const response = await axios.get(apiUrl);
    return response.data;
  };

  return useQuery(apiUrl, fetchApiData);
};

export default useFakeStoreApi;
