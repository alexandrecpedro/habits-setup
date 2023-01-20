import axios from "axios";

export const api = axios.create({
    baseURL: 'http://localhost:3333'
    // baseURL: `http://${process.env.IP}:3333`
});