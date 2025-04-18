import React, { useState } from 'react';

const ControlledForm = () => {
    const [password, setPassword] = useState('');
    const [error,setError]=useState('');

        const handleSubmit= (formData) =>{
    // e.preventDefault();
            console.log(formData.get('password'));
        if(password.length<6){
setError('password 6 charecter ar base deta hobo')
        }else{
            setError('')
        }
        }

    const handleControlledForm = (e) => {
        console.log(e.target.value);
        setPassword(e.target.value);

        // if(password.length<6){
        //     setError('error: password maus be 6 charackter')
        // }else{
        //     setError("")
        // }
    }
    return (
        <div>
            <form action={handleSubmit} >
                <input type="email" placeholder='email' name='email' required /> <br />
                <input type="password" onChange={handleControlledForm} defaultValue={password} name="password" placeholder='password' required /> <br />
                <input type="submit" value="submit" />
            </form>
            <p style={{color:'red'}}>
                <small>{error}</small>
                </p>
        </div>
    );
};

export default ControlledForm;