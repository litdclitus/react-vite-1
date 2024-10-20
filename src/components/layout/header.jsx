// import './header.css';
// import { NavLink } from "react-router-dom";
// import { RxDashboard } from "react-icons/rx";
// import { HiOutlineUsers } from "react-icons/hi2";
// import { GiBlackBook } from "react-icons/gi";
// import { CiLogin } from "react-icons/ci";


// const Header = () => {

//     return (
//         <div className="header-nav">
//             <ul className="nav-links">
//                 <li className='nav-link-item'>
//                     <NavLink to="/" className="item-icon">
//                         <span style={{ marginRight: 5, marginTop: 2 }}> <RxDashboard /></span>
//                         <span>Dashboard</span>
//                     </NavLink>
//                 </li>
//                 <li className="nav-link-item center">
//                     <NavLink to="/users" className="item-icon">
//                         <span style={{ marginRight: 5, marginTop: 2 }}> <HiOutlineUsers /></span>
//                         <span>User</span>
//                     </NavLink>
//                 </li>
//                 <li className="nav-link-item center">
//                     <NavLink to="/books" className="item-icon">
//                         <span style={{ marginRight: 5, marginTop: 2 }}> <GiBlackBook /></span>
//                         <span>Books</span>
//                     </NavLink>
//                 </li>
//             </ul>

//             <ul className="nav-links">
//                 <li className="nav-link-item center">
//                     <NavLink to="/login" className="item-icon">
//                         <span style={{ marginRight: 5, marginTop: 2 }}> <CiLogin /></span>
//                         <span>Log in</span>
//                     </NavLink>
//                 </li>
//             </ul>
//         </div>
//     )
// }

// export default Header;
import { Link, NavLink } from 'react-router-dom';
import { Menu } from 'antd';
import { UsergroupAddOutlined, HomeOutlined, AuditOutlined, SettingOutlined } from '@ant-design/icons';
import { useState } from 'react';
import { MdOutlineManageAccounts } from "react-icons/md";
import { GiBlackBook } from "react-icons/gi";


const Header = () => {
    const [current, setCurrent] = useState('');
    const onClick = (e) => {
        console.log('click ', e);
        setCurrent(e.key);
    };

    const items = [
        {
            label: <Link to={"/"}>Dashboard</Link>,
            key: 'home',
            icon: <HomeOutlined />,
        },
        {
            label: <Link to={"/users"}>Users</Link>,
            key: 'users',
            icon: <UsergroupAddOutlined />
        },
        {
            label: <Link to={"/books"}>Books</Link>,
            key: 'books',
            icon: <GiBlackBook />,
        },

        {
            label: 'Account',
            key: 'account',
            icon: <MdOutlineManageAccounts />,
            children: [
                {
                    label: <Link to={"/login"}>Log in</Link>,
                    key: 'login',
                },
                {
                    label: 'Log out',
                    key: 'logout',
                },
            ],
        },

    ];

    return (
        <Menu style={{ display: "flex", }}
            onClick={onClick}
            selectedKeys={[current]}
            mode="horizontal"
            items={items}
        />
    )
}

export default Header;
