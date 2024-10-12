import * as React from 'react';
import homeIcon from '../../assets/icons/home.svg'
import addIcon from '../../assets/icons/add.svg'
import directIcon from '../../assets/icons/direct.svg'
import myphotosIcon from '../../assets/icons/myphotos.svg'
import settingsIcon from '../../assets/icons/settings.svg'
import notificationIcon from '../../assets/icons/notification.svg'
import profileIcon from '../../assets/icons/profile.svg'
import { Link, useLocation } from 'react-router-dom';
import { cn } from '@/lib/utils';
import { buttonVariants } from '../ui/button';
import { LogOutIcon } from 'lucide-react';
import { useUserAuth } from '@/context/userAuthContext';

interface ISideBarProps {
}

const navItems = [
    {
        name: 'Home',
        link: '/',
        icon: homeIcon
    },
    {
        name: 'Add Photos',
        link: '/post',
        icon: addIcon
    },
    {
        name: 'My Photos',
        link: '/myphotos',
        icon: myphotosIcon
    },
    {
        name: 'Profile',
        link: '/profile',
        icon: profileIcon
    },
    {
        name: 'Notifications',
        link: '#',
        icon: notificationIcon
    },
    {
        name: 'Direct',
        link: '#',
        icon: directIcon
    },
    {
        name: 'Settings',
        link: '#',
        icon: settingsIcon
    },
]
const SideBar: React.FunctionComponent<ISideBarProps> = (props) => {
    const { pathname } = useLocation();
    const { logOut } = useUserAuth();
    return (
        <nav className='flex flex-col space-x-2 relative h-screen max-w-sm w-full'>
            <div className='flex justify-center m-5'>
                <div className='text-white text-lg'>
                    Photogram
                </div>
            </div>
                {navItems.map((item) => (
                    <div className={cn(buttonVariants({ variant: "default" }),
                        pathname === item.link
                            ? "bg-white text-white-800 hover:bg-white rounded-none"
                            : "hover:bg-slate-950 hover:text-white bg-transparent rounded-none",
                        "justify-start"
                    )} key={item.name}>
                        <Link to={item.link} className='flex'>
                            <span>
                                <img src={item.icon} className='h-5 w-5 mr-2 text-white' alt={item.name}
                                    style={{
                                        filter: `${
                                    pathname === item.link ? "invert(0)" : "invert(1)"
                                        }`
                                }}/>
                            </span>
                            <span>
                                {item.name}
                            </span>
                        </Link>
                    </div>
                ))}
            <div className={cn(buttonVariants({ variant: "default" }),
                pathname === '/login'
                ? "bg-white text-white-800 hover:bg-white rounded-none"
                : "hover:bg-slate-950 hover:text-white bg-transparent rounded-none",
                "justify-start"
                )}
                
            >
                <Link to='/login' className='flex'
                onClick={logOut}>
                    <span style={{
                                filter: `${
                            pathname === '/login'? "invert(1)" : "invert(0)"
                                }`
                        }}>
                        <LogOutIcon color='white' className='h-5 w-5 mr-2 text-white'
                            />
                    </span>
                    <span>
                        Logout
                    </span>
                </Link>
            </div>
        </nav>
    );
};

export default SideBar;
