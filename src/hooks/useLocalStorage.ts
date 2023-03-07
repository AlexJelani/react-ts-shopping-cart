import { useEffect, useState } from "react";

export function useLocalStorage <t>(key:string, intialValue: t | (()=>t)) {
    const [value, setValue] = useState<t>(()=>{
        const jsonValue = localStorage.getItem(key) 

        if(jsonValue != null) return JSON.parse(jsonValue)

        if(typeof intialValue === "function") {
            return (intialValue as () => t)()
        } else {
            return intialValue
        }
    })


    useEffect(() => {
    localStorage.setItem(key, JSON.stringify(value))
    },[key, value])

    return [value, setValue] as [t, typeof setValue]
}

