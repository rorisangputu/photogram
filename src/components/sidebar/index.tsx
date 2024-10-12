import * as React from 'react';
import homeIcon from '../../assets/icons/home.svg'
import addIcon from '../../assets/icons/add.svg'
import directIcon from '../../assets/icons/direct.svg'
import logoutIcon from '../../assets/icons/logout.svg'
import myphotosIcon from '../../assets/icons/myphotos.svg'
import settingsIcon from '../../assets/icons/settings.svg'
interface ISideBarProps {
}

const navItems = [
    {
        name: 'Home',
        link: '#',
        icon: homeIcon
    }
]
const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
    return (
        <div>
            SideBar
        </div>
    );
};

export default SideBar;
