import AdminHeader from 'components/modules/admin/AdminHeader'
import React from 'react';

const Admin = ({children, route}) => (
    <div className="admin-panel">
        <AdminHeader {...route}/>
        {children}
    </div>
);

export default Admin;