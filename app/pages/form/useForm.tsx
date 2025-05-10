'use client'
import {useState, ChangeEvent } from "react"

export const useForm  = () => {
    const [streetAddress, setStreetAddress] = useState<string>("123 Main St.");
    const [city, setCity] = useState<string>("Chicago");

    const streetAddressChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStreetAddress(e.target?.value);
    }

    const cityChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCity(e.target?.value);
    }


    return {streetAddress, city,  streetAddressChange, cityChange}
}