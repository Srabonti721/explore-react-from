import React from 'react';

const FormAction = () => {
    const handleFormAction = (formData) => {
        console.log(formData.get('name'));
        console.log(formData.get('email'));

    }
    return (
        <div>
            <form action={handleFormAction}>
                <input type="text" name='name' placeholder='enter name' />
                <br />
                <input type="email" name="email" placeholder='enter emali' />
                <br />
                <input type="submit" value="submit" />
            </form>
        </div>
    );
};

export default FormAction;