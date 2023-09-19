
import services from '@/app/services/services';
import { Button } from '@mui/material';
import React, { use, useEffect, useState } from 'react';

const HomePage = () => {

    const [userData, setDataUser] = useState({});

    const getUserOnline = async () => {
        console.log("User Online");
        const user = await services.getRandomUserOnline();
        const { avatar, email, first_name, last_name, username, password } = user.data;
        setDataUser({ avatar, email, first_name, last_name, username, password });
        console.log(userData);
    }

    useEffect(() => {
        getUserOnline();
        console.log("Hola effect");

    }, []);

    return (
        <div className='wrapHome'>
            <div className='wrapHome__data'>
                <div className='wrapHome__data__avatar'>
                    <img src={userData.avatar} />
                </div>
                <div><b>Nombres:</b> {`${userData.first_name} ${userData.last_name}`}</div>
                <div><b>Email:</b> {userData.email}</div>
                <div><b>Nombre de usuario:</b> {userData.username}</div>
                <div><b>Contraseña:</b> {userData.password}</div>
                <Button color='secondary' variant="outlined" onClick={() => getUserOnline()}>GENERAR USUARIO</Button>
            </div>
        </div>
    )
}

export default HomePage;