import React, {useState} from 'react';
import {useRouter} from "next/router";



const LangChange = () => {

    const router = useRouter()



    const changeLang = async (locale:string) => {
        document.cookie = `NEXT_LOCALE=${locale}; max-age=31536000; path=/`
        await router.push(router.asPath, undefined, { locale })
        window.location.reload()
    }

    return (
        <>


                {
                    ['ua', 'en', 'ru' ].map (item => (
                        <span key={item}>
                            <label htmlFor={item} className='text-white'>{item}</label>
                            <input type='checkbox' value={item} id={item}  onClick={()=>changeLang(item)}/>
                        </span>
                    ))
                }


        </>
    );
};

export default LangChange;