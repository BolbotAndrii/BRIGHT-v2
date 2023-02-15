import React from 'react';
import { useRouter } from 'next/router'

export const getCookie = (cookieName:string) => {
    let cookie:any = {};
    document.cookie.split(';').forEach( el => {
        let [key,value] = el.split('=');
        cookie[key.trim()] = value;
    })
    return cookie[cookieName];
}

//lang
