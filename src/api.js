import axios from "axios";

const searchImages = async (userInput) => {
  const response = await axios.get('https://api.unsplash.com/search/photos', {
     headers: {
     Authorization: 'Client-ID v_bvFXMBbSC5BFvo_ksEMM7Y0IAzGf1zhhCFjUOp4c8'
     },
     params: {
     query: userInput
     }

    });
    console.log(response.data.results)
    return response.data.results;
}

export default searchImages;