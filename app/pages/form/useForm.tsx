'use client'
import {useState, ChangeEvent, FormEvent } from "react"
import {some} from 'lodash'

type Lot = {
    address:string,
    city:string,
    state:string
}

export const useForm  = () => {
    const [streetAddress, setStreetAddress] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [state,setState] = useState<string>('');
    const [lotList, setLotList] = useState<Array<Lot>>([])

    const streetAddressChange = (e:ChangeEvent<HTMLInputElement>) => {
        setStreetAddress(e.target?.value);
    }

    const cityChange = (e:ChangeEvent<HTMLInputElement>) => {
        setCity(e.target?.value);
    }

    const stateChange = (e:ChangeEvent<HTMLSelectElement>) => {
        setState(e.target?.value);
    }

    const onSubmit = (e:FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        e.stopPropagation();
        const lot = {address: streetAddress, city:city, state:state}
        setLotList((list)=> {
            if (!some(list,lot)) {
                return [...list,lot]
            } else {
                return list
            }
        });
    }


    return {streetAddressChange, cityChange, stateChange, onSubmit, lotList}
}