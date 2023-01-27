const API_KEY="5ee485ca265bf828a3255399a0c7c58b";
const BASE_URL="https://api.themoviedb.org/3/";

const GET =async (type="movie", resource="550") =>{
    const res = await fetch(`${BASE_URL}${type}/${resource}?api_key=${API_KEY}`)
    const data= await res.json();
    return data;
}
export{ GET};