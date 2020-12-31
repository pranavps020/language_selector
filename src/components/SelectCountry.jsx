import React, { useState,useEffect } from 'react'
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';



function SelectCountry() {
  const [Dat, setDat] = useState('');
  useEffect(() => {
    fetch("https://restcountries.eu/rest/v2/all")
      .then(res => res.json())
      .then(
        (result) => {
          setDat(result);
        },
        (error) => {
          console.log(error)
        }
      )
    },)
      
    return (
        <div>
        <Autocomplete
        multiple
        id="tags-standard"
        options={Dat}
        getOptionLabel={(option) => option.languages[0].name}
        size="medium"
        renderInput={(params) => (
          <TextField
            {...params}
            variant='standard'
            label="Select languages"
            placeholder="Search for languages"
          />
        )}
      />
    </div>
  );
}


        
    


export default SelectCountry;
