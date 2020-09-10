import React from 'react'
import { DataBuahProvider } from "./dataBuahContext"
import DataBuahList from "./dataBuahList"
import DataBuahForm from "./dataBuahForm"



const DataBuah = () => {
    return (
        <>
            <DataBuahProvider>
                <DataBuahList />
                <DataBuahForm />
            </DataBuahProvider>
        </>
    )
}


export default DataBuah