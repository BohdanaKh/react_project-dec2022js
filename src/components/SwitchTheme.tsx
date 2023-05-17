import {FC} from 'react';

import {useAppDispatch, useAppSelector} from "../hooks";
import {themeActions} from "../redux";


const SwitchTheme: FC = () => {
    const {darkMode} = useAppSelector(state => state.themeReducer);
    const dispatch = useAppDispatch();


    return (
        <div>
            <button className={'toggle_theme'} onClick={() => dispatch(themeActions.toggleTheme())} >{darkMode?'Dark':'Light'}</button>
        </div>
    );
};

export {SwitchTheme};
