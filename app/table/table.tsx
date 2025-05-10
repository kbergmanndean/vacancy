import {Lot} from '../pages/form/useForm'
const data= [{address:'134 Main St.', city:'Riverdale', state:'Maryland'}]

export const Table = () => {

    return (
        <div>
    <table>
        <caption>Table of vacant buildings</caption>
        <thead>
            <tr>
                <th>Street Address</th>
                <th>City</th>
                <th>State</th>
            </tr>
        </thead>
        <tbody>{data.map((lot:Lot, i)=>{
            return (
                <tr key={`${lot.address}-${i}`}>
                    <th>{lot.address}</th>
                    <th>{lot.city}</th>
                    <th>{lot.state}</th>
                </tr>
            )
        })}

        </tbody>

    </table>
    </div>)
}
