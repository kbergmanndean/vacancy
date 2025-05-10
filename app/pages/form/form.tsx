'use client'
import {useForm} from "./useForm"
import {InputSet, Input, FormContainer, Select, SubmitButton} from './formStyles'


export const Form = () => {
    const {streetAddressChange, cityChange, stateChange, onSubmit, lotList} = useForm();


    return(
        <FormContainer>
            <form onSubmit={onSubmit}>
                <InputSet>
                    <label htmlFor="address">Street Address:</label>
                    <Input type="text" id="address" placeholder="123 Main St." name="address" onChange={streetAddressChange}/>
                </InputSet>
                <InputSet>
                    <label htmlFor="city">City:</label>
                    <Input type="text" id="city" placeholder="Chicago" name="city" onChange={cityChange}/>
                </InputSet>
                <InputSet>
                <label htmlFor="state">State:</label>
                <Select id="state" name="state" onChange={stateChange}>
                    <option value="MD">Maryland</option>
                    <option value="AK">Alaska</option>
                    <option value="MA">Minnesota</option>
                    <option value="MN">Maine</option>
                </Select>
                </InputSet>
            <SubmitButton type="submit">Submit</SubmitButton>
            </form>
            <div>
                    {lotList.map((lot,i)=> {
                        return (<div key={`${lot.address}-${i}`}>
                            <p>{lot.address}</p>
                            <p>{lot.city}</p>
                            <p>{lot.state}</p>
                            </div>)
                    })}
            </div>
        </FormContainer>
    )
}