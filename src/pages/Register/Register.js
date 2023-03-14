import styles from './Register.module.css'
import { useState, useEffect } from 'react'
import { useAutentication } from '../../hooks/useAutentication'

const Register = () => {
    const [displayName, setDisplayName]= useState("")
    const [email, setEmail]= useState("")
    const [password, setPassword]= useState("")
    const [confirmPassword, setConfirmPassword]= useState("")
    const [error, setError]= useState("")

    const {createUser, error: authError, loading}= useAutentication()

    const handleSubmit = async (e)=>{
        e.preventDefault()

        setError("")

        const user = {
            displayName,
            email,
            password
        }

        if(password !== confirmPassword){
            setError("As senhas precisam ser iguais.")
            return
        }

        const res = await createUser(user)

        console.log(res)
    }

    useEffect(()=>{
        if(authError){
            setError(authError)
        }
    },[authError])

  return (
    <div className={styles.register}>
        <h1>Cadastre-se para postar</h1>
        <p>Crie seu usuário e compartilhe suas histórias</p>
        <form onSubmit={handleSubmit}>
            <label>
                <span>Nome:</span>
                <input 
                type="text" 
                name="displayName" 
                placeholder='Nome do usuário' 
                required
                value={displayName}
                onChange={(e)=> setDisplayName(e.target.value)} />
            </label>
            <label>
                <span>Email:</span>
                <input 
                type="email" 
                name="email"
                placeholder='Email do usuário'
                required
                value={email}
                onChange={(e)=> setEmail(e.target.value)}/>
            </label>
            <label>
                <span>Senha:</span>
                <input 
                type="password" 
                name="password" 
                placeholder='Insira sua senha'
                required
                value={password}
                onChange={(e)=> setPassword(e.target.value)}/>
            </label>
            <label>
                <span>Confirmação de senha:</span>
                <input 
                type="password" 
                name="confirmPassword" 
                placeholder='Confirme a sua senha'
                required
                value={confirmPassword}
                onChange={(e)=> setConfirmPassword(e.target.value)}/>
            </label>
            {!loading && <button className="btn">Cadastrar</button>}
            {loading && <button className="btn" disabled>Aguarde...</button>}
            {error && <p className='error'>{error}</p>}
        </form>
    </div>
  )
}

export default Register