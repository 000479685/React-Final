import React, { useState, useEffect } from "react";
import {addDoc, collection} from 'firebase/firestore';
import {auth, db} from '../firebaseConfig'
import { Box, FormControlLabel, Radio, FormControl, RadioGroup, FormLabel, Button, TextField, Typography} from "@mui/material";
import { useNavigate } from "react-router-dom";

const categories = [
    'weapons',
    'characters',
    'enemies',
    'misc'
]

const CreatePage = () => 
{
    const navigate = useNavigate();

    // if the user is not logged in, bring them back to the home page
    useEffect(() =>
    {
        if(!auth.currentUser)
        {            
            navigate('/');
        }
    }, [])

    const [pageInfo, setPageInfo] = useState({                
    })

    const [pageName, setPageName] = useState(
        ''
    )

    const [type, setType] = useState('')
    const [damage, setDamage] = useState(0)
    const [knockback, setKnockback] = useState(0)
    const [description, setDescription] = useState('')
    const [image, setImage] = useState('')
    const [animation, setAnimation] = useState('')
    const [variantOf, setVariantOf] = useState('')
    const [height, setHeight] = useState('')
    const [weight, setWeight] = useState('')
    const [eyeColor, setEyeColor] = useState('')
    const [mainAbility, setMainAbility] = useState('')
    const [story, setStory] = useState('')
    const [strengthLevel, setStrengthLevel] = useState('')
    


    const [renderPageFlag, setRenderPageFlag] = useState('')

    const pageCollectionReference = collection(db, "pages");
    const weaponsCollectionReference = collection(db, "weapons")
    const charactersCollectionReference = collection(db, "characters")
    const enemiesCollectionReference = collection(db, "enemies")
    // const [alertConfig, setAlertConfig] = useState({});

    const handleCreatePage = async () =>
    {
        if(pageInfo.page === '')
        {
            console.log("Blank page name")
            return;
        }
        try {
            // console.log(typeof(pageInfo), pageInfo)            
            switch(renderPageFlag)
            {
                case "weapons":
                    await addDoc(weaponsCollectionReference, pageInfo)
                case "enemies":
                    await addDoc(enemiesCollectionReference, pageInfo)
                case "characters":
                    await addDoc(charactersCollectionReference, pageInfo)
            }
            // await addDoc(pageCollectionReference, pageInfo)
            // setAlertConfig({...alertConfig, message:'Succesfully Created a page', color: 'success', isOpen: true })
        } catch (error) {
            // setAlertConfig({...alertConfig, message:'There was an error creating page', color: 'error', isOpen: true })
        }
    }

    const handleCategoryChange = (category) =>
    {
        setPageInfo({})
        setRenderPageFlag(category)
    }    

    const handlePageNameChange = (page) =>
    {
        setPageName(page)
        setPageInfo({...pageInfo, ["name"]:page})
    }    

    const handleDataChange = (data, fieldName, func) =>
    {
        func(data)
        setPageInfo({...pageInfo, [fieldName]:data})
    }


    const formFieldsRenderer = () =>
    {
        switch(renderPageFlag)
        {
            case "weapons" :                
                return (
                <>
                <TextField
                    required
                    id="name"
                    label='name'
                    placeholder="Enter Name Here"
                    variant="filled"
                    value={pageName}
                    onChange={(e) => handlePageNameChange(e.target.value)}
                />
                <TextField
                    required
                    id="type"
                    label='type'
                    placeholder="Enter Type Here"
                    variant="filled"
                    value={type}
                    onChange={(e) => handleDataChange(e.target.value, e.target.id, setType)}
                />
                <TextField
                    required
                    id="damage"
                    label='Damage'
                    type="number"
                    placeholder="Enter Damage Here"
                    variant="filled"
                    value={damage}
                    onChange={(e) => handleDataChange(e.target.value, e.target.id, setDamage)}
                />
                <TextField
                    required
                    id="knockback"
                    label='Knockback'
                    type="number"
                    placeholder="Enter Knockback Here"
                    variant="filled"
                    value={knockback}
                    onChange={(e) => handleDataChange(e.target.value, e.target.id, setKnockback)}
                />
                <TextField
                    required
                    id="description"
                    label='description'
                    placeholder="Enter Description Here"
                    variant="filled"
                    value={description}
                    onChange={(e) => handleDataChange(e.target.value, e.target.id, setDescription)}
                />
                <TextField
                    required
                    id="image"
                    label='Image'
                    placeholder="Enter Image Here"
                    variant="filled"
                    value={image}
                    onChange={(e) => handleDataChange(e.target.value, e.target.id, setImage)}
                />
                <TextField
                    required
                    id="animation"
                    label='Animation'
                    placeholder="Enter Animation Here"
                    variant="filled"
                    value={animation}
                    onChange={(e) => handleDataChange(e.target.value, e.target.id, setAnimation)}
                />
                </>
                )
            case "enemies":
                return (
                    <>
                    <TextField
                        required
                        id="name"
                        label='Name'
                        placeholder="Enter Name Here"
                        variant="filled"
                        value={pageName}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setPageName)}
                    />
                    <TextField
                        required
                        id="description"
                        label='Description'
                        placeholder="Enter Description Here"
                        variant="filled"
                        value={description}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setDescription)}
                    />
                    <TextField
                        required
                        id="variantOf"
                        label='Variant Of'
                        placeholder="Enter Enemy Variant Here"
                        variant="filled"
                        value={variantOf}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setVariantOf)}
                    />
                    <TextField
                        required
                        id="image"
                        label='Image'
                        placeholder="Enter Image Here"
                        variant="filled"
                        value={image}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setImage)}
                    />
                    </>
                )        
            case "characters":
                return (
                    <>
                    <TextField
                        required
                        id="name"
                        label='Name'
                        placeholder="Enter Name Here"
                        variant="filled"
                        value={pageName}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setPageName)}
                    />
                    <TextField
                        required
                        id="description"
                        label='Description'
                        placeholder="Enter description Here"
                        variant="filled"
                        value={description}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setDescription)}
                    />
                    <TextField
                        required
                        id="image"
                        label='Image'
                        placeholder="Enter Image Here"
                        variant="filled"
                        value={image}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setImage)}
                    />
                    <TextField
                        required
                        id="height"
                        label='Height'
                        placeholder="Enter Height Here"
                        variant="filled"
                        value={height}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setHeight)}
                    />
                    <TextField
                        required
                        id="weight"
                        label='Weight'
                        placeholder="Enter Weight Here"
                        variant="filled"
                        value={image}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setWeight)}
                    />
                    <TextField
                        required
                        id="eyeColor"
                        label='Eye Color'
                        placeholder="Enter Eye Color Here"
                        variant="filled"
                        value={eyeColor}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setEyeColor)}
                    />
                    <TextField
                        required
                        id="mainAbility"
                        label='Main Ability'
                        placeholder="Enter Main Ability Here"
                        variant="filled"
                        value={mainAbility}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setMainAbility)}
                    />
                    <TextField
                        required
                        id="story"
                        label='Story'
                        placeholder="Enter Story Here"
                        variant="filled"
                        value={story}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setStory)}
                    />
                    <TextField
                        required
                        id="strengthLevel"
                        label='Strength Level'
                        placeholder="Enter Strength Level Here"
                        variant="filled"
                        value={strengthLevel}
                        onChange={(e) => handleDataChange(e.target.value, e.target.id, setStrengthLevel)}
                    />
                    </>
                )
                
            case "misc":
                return (
                    <>
                        <Typography variant="h1">Currently not available</Typography>
                    </>
                )
            default:
                return (
                    <>
                        <Typography variant='h1'>Something went wrong here</Typography>
                    </>
                )
        }
    }

    return (
        <>
        <Box margin='15px' component="form" sx={{backgroundColor:'#d1d1d1', margin:'5px', padding:'5px'}}>
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
                <Box                     
                    sx={{ '& .MuiTextField-root': { m: 1, width: '95%'} }}
                >
                    {
                        formFieldsRenderer()
                    }
                </Box>
                <Button variant="outlined" onClick={handleCreatePage} >Submit</Button>
            </FormControl>
            {/* <Alert alertConfig={alertConfig} /> */}
        </Box>
        </>
    )
}

export default CreatePage