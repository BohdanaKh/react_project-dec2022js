import {FC} from 'react';

import {useAppDispatch} from "../hooks";
import {themeActions} from "../redux";


const SwitchTheme: FC = () => {
    const dispatch = useAppDispatch();


    return (
        <div>
            <button onClick={() => dispatch(themeActions.toggleTheme())} >Light/Dark</button>
        </div>
    );
};

export {SwitchTheme};
