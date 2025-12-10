import React from 'react';
import { Link, NavLink } from 'react-router-dom'; // <--- Change Link to NavLink
import { useMovieContext } from '../context/MovieContext';

const Navbar = () => {
  const { favorites } = useMovieContext();

  // Helper function to define styles based on active state
  const navLinkStyles = ({ isActive }: { isActive: boolean }) => {
    return {
      color: isActive ? '#f5c518' : '#fff', // Yellow if active, White if not
      textDecoration: 'none',
      fontWeight: isActive ? 'bold' : 'normal',
      borderBottom: isActive ? '2px solid #f5c518' : '2px solid transparent', // Underline active
      paddingBottom: '4px',
      transition: 'all 0.3s ease'
    };
  };

  return (
    <nav style={{ 
      display: 'flex', 
      justifyContent: 'space-between', 
      alignItems: 'center',
      padding: '1rem 2rem', 
      background: '#1a1a1a', 
      color: '#fff',
      boxShadow: '0 2px 10px rgba(0,0,0,0.3)'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        <Link to="/" style={{ margin: 0, fontSize: '1.5rem', color: '#f5c518', textDecoration: 'none' }}>🎬 MovieHub</Link>
      </div>

      <div style={{ display: 'flex', gap: '30px' }}>
        {/* Home Link */}
        <NavLink to="/" style={navLinkStyles}>
          Home
        </NavLink>

        {/* Favorites Link */}
        <NavLink to="/favorites" style={navLinkStyles}>
          Favorites 
          {/* Badge for count */}
          {favorites.length > 0 && (
            <span style={{
              marginLeft: '8px',
              background: 'red',
              color: 'white',
              borderRadius: '50%',
              padding: '2px 8px',
              fontSize: '0.8rem',
              verticalAlign: 'middle'
            }}>
              {favorites.length}
            </span>
          )}
        </NavLink>
      </div>
    </nav>
  );
};

export default Navbar;