import React, { useState } from 'react';

const ControlledForm = () => {
    const [password, setPassword] = useState('');
        const handleSubmit= (formData) =>{
    // e.preventDefault();
            console.log(formData.get('password'));}
    const handleControlledForm = (e) => {
        console.log(e.target.value);
        

    }
    return (
        <div>
            <form action={handleSubmit} >
                <input type="email" placeholder='email' name='email' required /> <br />
                <input type="password" onChange={handleControlledForm} defaultValue={password} name="password" placeholder='password' required /> <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default ControlledForm;