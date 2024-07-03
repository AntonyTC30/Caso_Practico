import axios from "axios";

const apiClient = axios.create({
  baseURL:
    "https://tribu-ti-staffing-desarrollo-afangwbmcrhucqfh.z01.azurefd.net/ipfmsa-productosfinancieros",
  headers: {
    "Content-Type": "application/json",
    authorId: "your-author-id", 
  },
});

export default apiClient;
