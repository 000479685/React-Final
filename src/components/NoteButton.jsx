import { Backdrop, Box, Button, TextField, Typography } from "@mui/material";
import React, { useEffect, useState } from "react";
import { auth, db } from "../firebaseConfig";
import { useLocation } from "react-router-dom";
import { addDoc, collection, doc, getDoc, getDocs, updateDoc } from "firebase/firestore";
import { FormControl, FormLabel } from "react-bootstrap";


const validRoutes = 
[
    '/weapons',
    '/enemies',
    '/characters'
]

const NoteButton = () =>
{
    let location = useLocation();

    const [notesInfo, setNotesInfo] = useState({
        page:  location.pathname,
        content: ''
    })

    const userNotesCollectionReference = collection(db, "userNotes")
    const [notesList, setNotesList] = useState([])
    const [pageRelevantNotes, setPageRelevantNotes] = useState([])

    const [newNoteText, setNewNotetext] = useState('')

    const [targetDoc, setTargetDoc] = useState({})

    const [open, setOpen] = useState(false)
    const handleClose = () => {
        setOpen(false);
      };
      const handleOpen = () => {
        setOpen(true);
      };


    const getNotesList = async() =>
    {
        try{
            const notes = await getDocs(userNotesCollectionReference)
            const extractedNotes = notes.docs.map((doc) =>
            {
                return{
                    id: doc.id,
                    ...doc.data()
                }
            })
            setNotesList(extractedNotes)

            const correctEmailDoc = extractedNotes.filter((doc) =>
                {
                    return doc.email == auth.currentUser.email
                }
            )

            // TODO : GET SINGLE DOCUMENT ELEMENT SO THAT NOTES CAN BE PROPERLY UPDATED
            const testDocFind = await getDoc(doc(db, "userNotes"))
            console.log(testDocFind)

            setTargetDoc(correctEmailDoc)
            console.log(correctEmailDoc)
            const temp = correctEmailDoc.filter((note) =>
            {
                return location.pathname.includes(note.page);
            })
            setPageRelevantNotes(temp)
        }
        catch(error)
        {
            console.log(error)
        }
    }

    const checkIfValidPage = () =>
    {
        //gets the information about the page and if it is one that can be edited        
        
        for (let i of validRoutes)    
        {
            if(location.pathname.includes(i))
            {
                return true
            }
        }        

        return false
    }    

    const checkForUserLoggedIn = () =>
    {
        return auth.currentUser
    }

    const renderButton = () =>
    {
        if(checkIfValidPage() && checkForUserLoggedIn())
        {
            return (
                <>
                <Box id='noteButtonBox' position='fixed' top='90%' left='5%'>
                    <Button color="secondary" variant="contained" onClick={openNoteOverlay}>Notes</Button>        
                </Box>                                
                </>
            )
        }
    }

    const openNoteOverlay = () =>
    {
        handleOpen();
        console.log("opening overlay") 
    }

    const createNote = async () =>
    {        
        try{            
            console.log("adding a note")
            await updateDoc(userNotesCollectionReference, notesInfo, targetDoc.id)
        }
        catch (error)
        {
            console.log(error)
        }
    }

    useEffect(() =>
    {
        if(checkIfValidPage() && checkForUserLoggedIn())            
        {
            getNotesList()
        }
    }, [])

    return (
        <>
            {
                renderButton()
            }
            <Backdrop
                sx={(theme) => ({ color: '#fff', zIndex: theme.zIndex.drawer + 1 })}
                open={open}                
            >
                <Box position='fixed' top='5%'>
                    <Button onClick={handleClose} variant="contained">Close</Button>
                </Box>
                <Box display={'flex'} flexDirection={'column'} >
                {
                    pageRelevantNotes.map((note, index) => 
                    {
                        return <Typography key={index}>{note.content}</Typography>
                    })
                }
                <Box component={'form'} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' } }}>
                {/* <FormControl> */}
                    <FormLabel id="NewNoteForm">New Notes</FormLabel>
                    <TextField
                        id="newNoteContents"
                        label="New Note"
                        placeholder="Type your new note in"
                        variant="filled"
                        multiline
                        sx={{input:{color:'white'}}}
                        rows={5}
                        value={newNoteText}
                        onChange={(e) => {setNewNotetext(e.target.value), setNotesInfo({...notesInfo, ["content"]:e.target.value})}}
                    />
                    <Button onClick={createNote} variant="contained">Add Note</Button>
                {/* </FormControl> */}
                </Box>
            </Box>
            </Backdrop>
        </>
    )
}

export default NoteButton

/*Either make this 
*    position: absolute 
*       To make it relative to another element in the page
*    position: fixed
*       For ensuring it is always on a certain point in the screen 
*/