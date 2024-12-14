import { Backdrop, Box, Button, Card, TextField, Typography } from "@mui/material";
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

    const [targetDocData, setTargetDocData] = useState({

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

            
            const testDoc = doc(db, "userNotes", correctEmailDoc[0].id)
            const testDocFind = await getDoc(testDoc)
            // console.log(testDocFind, correctEmailDoc[0].id)

            setTargetDoc(testDoc)
            // console.log(correctEmailDoc)
            const temp = testDocFind.data().notes.filter((note) =>
            {
                return location.pathname.includes(note.page);
            })
            setPageRelevantNotes(temp)
            // console.log(temp)
            // console.log(testDocFind.data(), testDocFind.data().notes)
            setTargetDocData(testDocFind.data())
        }
        catch(error)
        {
            console.log(error)
        }
    }

    const checkIfValidPage = () =>
    {
        //gets the information about the page and if it is one that can be edited        
        // console.log(location.pathname, location.pathname.includes('/characters'))
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
                <Box id='noteButtonBox' position='fixed' top='90%' left='5%' zIndex={99}>
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
            // console.log("adding a note", notesInfo)
            // console.log(targetDocData.notes)
            if(!targetDocData.notes)
            {
                targetDocData.notes = []
            }
            targetDocData.notes.push(notesInfo)
            // console.log(targetDocData, targetDoc)            
            await updateDoc(targetDoc, targetDocData)
            await fetchNotes()
        }
        catch (error)
        {
            console.log(error)
        }
    }

    const fetchNotes = async () =>
    {        
        
        const correctEmailDoc = notesList.filter((doc) =>
            {
                return doc.email == auth.currentUser.email
            }
        )

        
        const testDoc = doc(db, "userNotes", correctEmailDoc[0].id)
        const testDocFind = await getDoc(testDoc)

        const temp = testDocFind.data().notes.filter((note) =>
        {
            return location.pathname.includes(note.page);
        })
        setPageRelevantNotes(temp)
        // console.log("reloaded notes")
        // console.log(pageRelevantNotes)
    }

    useEffect(() =>
    {
        if(checkIfValidPage() && checkForUserLoggedIn())            
        {
            getNotesList()
            // console.log(pageRelevantNotes)
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
                <Box position='fixed' top='5%' sx={{zIndex:99}}>
                    <Button onClick={handleClose} variant="contained">Close</Button>
                </Box>
            <Box display={'grid'} gridAutoColumns={'1'} sx={{background:'rgba(0,0,0,0.6)', overflowY:'auto', maxHeight:'900px', top:'10%'}}>
                {
                    pageRelevantNotes.map((note, index) => 
                    {
                        return (
                        <Card sx={{backgroundColor:'grey', border:'2px', maxWidth:'500px', padding:2, margin:'3px', boxShadow:'2px, 2px, 5px, white', opacity:0.75}}>
                            <Typography key={index} sx={{textShadow:"2px 2px 2px rgb(54, 54, 54)"}}>{note.content}</Typography>
                        </Card>
                        )
                    })
                }
                <Box component={'form'} sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, opacity:0.8, marginTop:'25px', backgroundColor:'grey'}}>
                {/* <FormControl> */}
                    <Typography id="NewNoteLabel" color="white" marginLeft={'5px'}>New Notes</Typography>
                    <TextField
                        id="newNoteContents"
                        label="New Note"
                        placeholder="Type your new note in"
                        variant="filled"
                        multiline                        
                        sx={{input:{color:'white'}, boxShadow:'2px 2px 5px white', minWidth:'350px', color:'white'}}
                        rows={5}
                        fullWidth
                        value={newNoteText}
                        onChange={(e) => {setNewNotetext(e.target.value), setNotesInfo({...notesInfo, ["content"]:e.target.value})}}
                    />
                    <Button onClick={createNote} variant="contained" sx={{marginLeft:'15px'}}>Add Note</Button>
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