import React from 'react';
import { IconContext } from 'react-icons';
import { Link, useLocation } from 'react-router-dom';
import './sidebarButton.css';

const SidebarButton = (props) => {
  const location = useLocation();

  const isActive = location.pathname === props.to;
  const btnClass = isActive ? 'btn-body active' : 'btn-body';

  return (
    <IconContext.Provider value={{ size: '24px', className: 'btn-icon' }}>
      <Link to={props.to} className={btnClass}>
        <div>
          {props.icon}
          <p className="btn-title">{props.title}</p>
        </div>
      </Link>
    </IconContext.Provider>
  );
};

export default SidebarButton;
