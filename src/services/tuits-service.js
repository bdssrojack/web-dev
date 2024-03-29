import axios from "axios";
// const TUITS_API = 'http://localhost:4000/api/tuits';
// const TUITS_API = 'https://web-dev-server-21fa.herokuapp.com/api/tuits';
const API_BASE = process.env.REACT_APP_API_BASE;
const TUITS_API = `${API_BASE}/tuits`;
console.log(TUITS_API);
export const createTuit = async (tuit) => {
    const response = await axios.post(TUITS_API, tuit);
    return response.data;
}
export const findAllTuits = async () => {
    const response = await axios.get(TUITS_API); //sends an HTTP GET request to the TUITS_API using the axios.get() function
    const tuits = response.data;
    return tuits;
}
export const deleteTuit = async (tuit) => {
    const response = await axios.delete(`${TUITS_API}/${tuit._id}`);
    return response.data;
}
export const updateTuit = async (tuit) => {
    const response = await axios
        .put(`${TUITS_API}/${tuit._id}`, tuit);
    return response.data;
}