import React from 'react';
const SimpleForm = () => {
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(e.target.name.value);
        console.log(e.target.email.value);
        console.log(e.target.password.value);
    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder='Your name' name='name' />
                <br />
                <input type="email" name="email" placeholder='Your email'/>
                <br />
                <input type="password" placeholder='enter your password' name='password' />
                <br />

                <input type="submit" value="Submit" />
            </form>
        </div>
    );
};
export default SimpleForm;