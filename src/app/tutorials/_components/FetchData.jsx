"use server";
import axios from "axios";

export const FetchData = async (page) => {
    try {
        const res = await axios.get(`${process.env.API_URL}/tutorials?populate=*&pagination[page]=${page}&pagination[pageSize]=6`, {
            headers: {
                Authorization: "bearer " + process.env.API_TOKEN
            }
        });
        return res.data.data; 
    } catch (error) {
        return null
    }
};
