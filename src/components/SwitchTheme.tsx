import {FC} from 'react';

import {useAppDispatch} from "../hooks";
import {themeActions} from "../redux";


const SwitchTheme: FC = () => {
    const dispatch = useAppDispatch();


    return (
        <div>
            <button className={'toggle_theme'} onClick={() => dispatch(themeActions.toggleTheme())}></button>
        </div>
    );
};

export {SwitchTheme};
