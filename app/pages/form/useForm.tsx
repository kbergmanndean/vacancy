'use client'
import {useState, ChangeEvent } from "react"

export const useForm  = () => {
    const [streetAddress, setStreetAddress] = useState<string>("123");
    const [street, setStreet] = useState<string>("Main");

    const streetAddressChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStreetAddress(e.target?.value);
    }

    const streetChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStreet(e.target?.value);
    }


    return {streetAddress, street,  streetAddressChange, streetChange}
}