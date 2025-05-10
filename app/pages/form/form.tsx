'use client'
import {useForm} from "./useForm"
import {InputSet, Input, FormContainer} from './formStyles'


export const Form = () => {
    const {streetAddressChange, streetChange, street, streetAddress} = useForm();





    return(
        <FormContainer>
    <form>
        <InputSet>
            <label>Street Address:</label>
            <Input id="address" placeholder="123" onChange={streetAddressChange}/>
        </InputSet>
        <InputSet>
            <label>Street:</label>
            <Input id="street" placeholder="Main St." onChange={streetChange}/>
        </InputSet>
    </form>
    <div>
        <p>
            <span>{`${streetAddress} ${street}`}</span></p>
    </div>
    </FormContainer>)
}