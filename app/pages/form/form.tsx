'use client'
import {useForm} from "./useForm"
import {InputSet, Input, FormContainer} from './formStyles'


export const Form = () => {
    const {streetAddressChange, cityChange, city, streetAddress} = useForm();


    return(
        <FormContainer>
    <form>
        <InputSet>
            <label>Street Address:</label>
            <Input id="address" placeholder="123 Main St." onChange={streetAddressChange}/>
        </InputSet>
        <InputSet>
            <label>Street:</label>
            <Input id="city" placeholder="Chicago" onChange={cityChange}/>
        </InputSet>
    </form>
    <div>
        <p>
            <span>{`${streetAddress} ${city}`}</span></p>
    </div>
    </FormContainer>)
}