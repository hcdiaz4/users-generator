import axios from "axios";

class Services {

    getRandomUserOnline = async () => {
        try {
            const data = await axios.get("https://random-data-api.com/api/users/random_user");
            return data;
        } catch (err) {
            console.log("error: ", err);
        }
    }

}

export default new Services();