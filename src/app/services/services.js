import axios from "axios";

class Services {

    getRandomUserOnline = async () => {
        try {
            const data = await axios.get("https://random-data-api.com/api/v2/users");
            return data;
        } catch (err) {
            console.log("[ Services.js (class Services) ]: ", err);
        }
    }

}

export default new Services();