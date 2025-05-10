import { styled } from '@mui/system';

export const FormContainer = styled('div')({
    width:'30%',
    border:'1px solid gray',
    borderRadius:4,
    boxShadow:'2px 2px 2px 1px',
    padding:'30px',
    margin: 'auto',
    marginTop:'50px'
})

export const InputSet = styled('div')({
    backgroundColor: 'aliceblue',
    padding: 8,
    borderRadius: 4,
    border: '1px solid gray',
    margin:'20px'
    
  });

export const Input = styled('input') ({
    border: '1px solid gray',
    borderRadius: 4,
    display: 'block',
    padding:'4px'

})

export const Select = styled('select') ({
    border: '1px solid gray',
    borderRadius: 4,
    display: 'block',
    padding:'4px'

})

export const SubmitButton = styled('button') ({
    backgroundColor:"green",
    borderRadius:'4px',
    padding:'6px',
    color:'white',
    fontWeight:'bold',
    margin:'20px'
})





