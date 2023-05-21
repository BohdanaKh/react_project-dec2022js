import {FC} from 'react';

import image from "../images/image.png";



const UserInfo: FC = () => {
const user = {
    username:'Bohdana135',
    password:'',
    APIkey:'5d64180d15634606eb26d7c93e18e3db'
}
    return (

        <button className="user">
            <img src={image} alt="user"/>
                <span>{user.username.charAt(0)}</span>
        </button>

        // <button className={'user'} type={'button'}>{user.username.charAt(0)}</button>
    );
};

export {UserInfo};
