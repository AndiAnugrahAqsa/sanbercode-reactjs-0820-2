import React, { useState, useEffect, createContext } from "react"
import axios from "axios"
export const DataBuahContext = createContext();


export const DataBuahProvider = props => {
    const [dataBuah, setDataBuah] = useState(null)
    const [input, setInput] = useState({ name: "", price: "", weight: 0, id: null })

    useEffect(() => {
        if (dataBuah === null) {
            axios.get(`http://backendexample.sanbercloud.com/api/fruits`)
                .then(res => {
                    setDataBuah(res.data)
                    console.log(res.data);
                })
        }
    }, [dataBuah])


    return (
        <DataBuahContext.Provider value={[dataBuah, setDataBuah, input, setInput]}>
            {props.children}
        </DataBuahContext.Provider>
    )
}