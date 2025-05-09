import React, { useState } from 'react';

function App() {
  const [images] = useState([
    { name: 'Beach Sunset', url: '' }
    // { name: 'Mountain View', url: '/images/mountain.jpg' },
    // { name: 'City Skyline', url: '/images/city.jpg' },
    // { name: 'Forest Trail', url: '/images/forest.jpg' },
    // { name: 'Desert Dunes', url: '/images/desert.jpg' },
  ]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>GV App Gallery</h1>
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {images.map((img, idx) => (
          <div key={idx} style={{ margin: '10px', textAlign: 'center' }}>
            <img
              src={img.url}
              alt={img.name}
              style={{ width: '200px', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            />
            <p>{img.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;