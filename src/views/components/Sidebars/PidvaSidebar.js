import React from 'react';
import { useSelector } from 'react-redux';
import AdminSidebarMenu from '../SidebarMenus/AdminSidebarMenu';
import PidvaSidebarMenu from '../SidebarMenus/PidvaSidebarMenu';
import './PidvaSidebar.scss';

const PidvaSidebar = () => {
    const getRoleId = useSelector(state => state.auth.set_user.role_id)

    return (
        <>
            <ul className={`pidvaSidebar ${getRoleId == 1 ? "AdminSidebar" : null}`}>
                {getRoleId === 2 ? <PidvaSidebarMenu /> : getRoleId === 1 ? <AdminSidebarMenu /> : null}
            </ul>
        </>
    );
}
export default PidvaSidebar;