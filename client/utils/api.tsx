import axios from "axios";

export const GetSidebar = (lang:any) => {
    return axios.post(`/api/admin/sidebar`,  { lang: lang})
}