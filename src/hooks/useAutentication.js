import {getAuth,
        createUserWithEmailandPassword,
        signInWithEmailAndPassword,
        updateProfile,
        signOut
} from 'firebase/auth'

import { useState, useEffect } from 'react'

export const useAutentication = ()=>{
    const [error, setError]= useState(null)
    const [loading, setLoading]= useState(null)

    //cleanup
    //deal with memory leak
    const [cancelled, setCancelled]= useState(false)

    const auth = getAuth()

    function checkIfIsCancelled(){
        if(cancelled){
            return
        }
    }
}