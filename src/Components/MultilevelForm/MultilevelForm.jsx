import React, { useState, useEffect, useReducer, Fragment } from "react";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import MenuItem from "@mui/material/MenuItem";
import { LoadingButton } from "@mui/lab";
import {
  Box,
  Button,
  Container,
  Link,
  TextField,
} from "@mui/material";
import InputLabel from '@mui/material/InputLabel';
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import FormHelperText from "@mui/material/FormHelperText";
import "../../App.css";

const MultilevelForm = () => {
  const { register, control, handleSubmit, reset, trigger, setError } = useForm(
    {
      defaultValues: { formData: [{ category: "APP", style: "", color: "" }] },
    }
  );
  const [category, setCategory] = useState();
  const [loading, setLoading] = useState(false);
  const { fields, append, remove } = useFieldArray({
    control,
    name: "formData",
  });
 
  const onSubmit = (data) => {
    console.log(data);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <Box>
        {fields.map((item, index) => (
          <Box>
            <FormControl sx={{ marginBottom: "20px", textAlign: "left" }}>
              <InputLabel id="select-user">User</InputLabel>
              <Select
                labelId="select-user"
                id="demo-select-user"
                value={category}
                label="Select User"
                onChange={(event)=>setCategory(event.target.value)}
                {...register(`formData.${index}.category`)}
              >
                <MenuItem value="FTW">Footwear</MenuItem>
                <MenuItem value="APP">Apparel</MenuItem>
                <MenuItem value="ACC">Accessories</MenuItem>
              </Select>
              <FormHelperText sx={{ color: "error.main" }}>
                <strong>error</strong>
              </FormHelperText>
            </FormControl>
            <TextField
                  autoComplete="off"
                  label="First Name"
                  type="text"
                  sx={{ marginBottom: "10px" }}
                  {...register(`formData.${index}.style`)}
                />
            <TextField
                  autoComplete="off"
                  label="First Name"
                  type="text"
                  sx={{ marginBottom: "10px" }}
                  {...register(`formData.${index}.color`)}
                />
         
            <button type="button" onClick={() => remove(index)}>
              Delete
            </button>
          </Box>
        ))}
      </Box>
      <Button
        type="button"
        onClick={() => append({ category: "APP", style: "", color: "" })}
      >
        append
      </Button>
      <LoadingButton
                  type="submit"
                  color="primary"
                  variant="contained"
                  loading={loading}
                  loadingIndicator="Loading..."
                  sx={{ marginBottom: 2 }}
                >
                  Submit
                </LoadingButton>
    </form>
  );
};

export default MultilevelForm;
