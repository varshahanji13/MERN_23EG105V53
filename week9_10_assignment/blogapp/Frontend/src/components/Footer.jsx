import React from 'react'

function Footer() {
  return (
    <footer style={{ backgroundColor: '#f8f9fa', padding: '20px', textAlign: 'center', marginTop: 'auto' }}>
      <div>
        <p>&copy; 2026 BlogApp. All rights reserved.</p>
        <p>Follow us on 
          <a href="#" style={{ margin: '0 10px' }}>Facebook</a> | 
          <a href="#" style={{ margin: '0 10px' }}>Twitter</a> | 
          <a href="#" style={{ margin: '0 10px' }}>Instagram</a>
        </p>
        <p>Contact: info@blogapp.com</p>
      </div>
    </footer>
  )
}

export default Footer;