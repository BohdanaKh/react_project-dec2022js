import {FC} from 'react';



const UserInfo: FC = () => {
const user = {
    username:'Bohdana135',
    password:'',
    APIkey:'5d64180d15634606eb26d7c93e18e3db'
}
    return (
        <div>
            <span>{user.username}</span>
        </div>
    );
};

export {UserInfo};
