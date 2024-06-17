import React from 'react';
import { NavLink } from 'react-router-dom';

const footerStyles = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  backgroundColor: '#343a40',
  padding: '10px 20px',
  color: 'white',
  position: 'fixed',
  bottom: 0,
  width: '100%',
  boxSizing: 'border-box',
};

const navStyles = {
  display: 'flex',
};

const linkStyles = {
  textDecoration: 'none',
  color: 'white',
  margin: '0 10px',
  padding: '8px',
  borderRadius: '5px',
  transition: 'background 0.3s',
};

const activeLinkStyles = {
  background: '#007bff',
};

const logoStyles = {
  fontSize: '1.2em',
  fontWeight: 'bold',
};

const clinicInfoStyles = {
  textAlign: 'center',
  fontSize: '0.9em',
};

function Footer() {
  return (
    <div style={footerStyles}>
      <div style={logoStyles}>Hospital Management</div>
      <div style={navStyles}>
        {/* <NavLink to="/" exact style={linkStyles} activeStyle={activeLinkStyles}>
          Home
        </NavLink>
        <NavLink to="/staffs" exact style={linkStyles} activeStyle={activeLinkStyles}>
          Staffs
        </NavLink>
        <NavLink to="/patients" exact style={linkStyles} activeStyle={activeLinkStyles}>
          Patients
        </NavLink>
        <NavLink to="/appointments" exact style={linkStyles} activeStyle={activeLinkStyles}>
          Appointments
        </NavLink>
        <NavLink to="/logout" exact style={linkStyles} activeStyle={activeLinkStyles}>
          Log Out
        </NavLink> */}
      </div>
      <div style={clinicInfoStyles}>
        <div>1234 Health St., Wellness City, 56789</div>
        <div>Contact: (123) 456-7890 | Email: info@hospital.com</div>
        <div>© 2024 Hospital Management System. All rights reserved.</div>
      </div>
    </div>
  );
}

export default Footer;
