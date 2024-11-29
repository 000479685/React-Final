import React, { useState } from "react";
import {addDoc, collection} from 'firebase/firestore';
import {db} from '../firebaseConfig'
import { Box, FormControlLabel, Radio, FormControl, RadioGroup, FormLabel, Button, TextField} from "@mui/material";

const categories = [
    'weapons',
    'characters',
    'stages',
    'misc'
]

const CreatePage = () => 
{
    const [pageInfo, setPageInfo] = useState({
        category: 'misc',
        page: '',
        content: []        
    })

    const [pageName, setPageName] = useState(
        ''
    )

    const pageCollectionReference = collection(db, "pages");
    // const [alertConfig, setAlertConfig] = useState({});

    const handleCreatePage = async () =>
    {
        if(pageInfo.page === '')
        {
            console.log("Blank page name")
            return;
        }
        try {
            console.log(pageInfo)
            await addDoc(pageCollectionReference, pageInfo)
            // setAlertConfig({...alertConfig, message:'Succesfully Created a page', color: 'success', isOpen: true })
        } catch (error) {
            // setAlertConfig({...alertConfig, message:'There was an error creating page', color: 'error', isOpen: true })
        }
    }

    const handleCategoryChange = (category) =>
    {
        setPageInfo({...pageInfo, category})
    }

    const handlePageNameChange = (page) =>
    {
        setPageName(page)
        setPageInfo({...pageInfo, page})
    }    

    return (
        <>
        <Box margin='15px'>
            <FormControl>
                <FormLabel id="category-radio-buttons-group-label">Category</FormLabel>
                <RadioGroup       
                    row             
                    aria-labelledby="demo-radio-buttons-group-label"
                    defaultValue="misc"
                    name="radio-buttons-group"
                >
                    {
                        categories.map((category, i) =>{
                            return <FormControlLabel value={category} control={<Radio/>} label={category}  onChange={() => handleCategoryChange(category)} key={i}/>
                        })
                    }                
                </RadioGroup>
                <TextField
                    required
                    id="page"
                    label='Page'
                    placeholder="Enter the page name"                    
                    value={pageName}
                    onChange={(e) => handlePageNameChange(e.target.value)}
                />
                <Button variant="outlined" onClick={handleCreatePage}>Submit</Button>
            </FormControl>
            {/* <Alert alertConfig={alertConfig} /> */}
        </Box>
        </>
    )
}

export default CreatePage