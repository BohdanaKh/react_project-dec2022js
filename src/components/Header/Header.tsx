import {FC} from 'react';

import css from './Header.module.css'

interface IProps {

}

const Header: FC<IProps> = () => {

    return (
        <div className={css.Header}>
            Header
        </div>
    );
};

export {Header};