import * as React from 'react';
import SideBar from '../sidebar';
import UserList from '../userList';


interface ILayoutProps {
    children: React.ReactNode;
}

const Layout: React.FunctionComponent<ILayoutProps> = ({children}) => {
    return (
        <div className='flex bg-white'>
            <aside className='flex gap-x-4 bg-gray-800 top-0 left-0 z-40 lg:w-60
            h-screen'>
                <SideBar/>
            </aside>
            <div className='p-8 flex-1 '>{children}</div>
            <aside className='hidden lg:block bg-gray-800 top-0 right-0 z-40 lg:w-60
            h-screen'>
                <UserList/>
            </aside>
            
        </div>
    );
};

export default Layout;
