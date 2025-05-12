import { useState } from 'react';
import { motion } from 'framer-motion';

function App() {
    const [images] = useState([
        { name: 'Beach Sunset', url: 'https://images.unsplash.com/photo-1507525428034-b723cf961d3e' },
        { name: 'Mountain View', url: 'https://images.unsplash.com/photo-1501785888041-af3ef285b470' },
        { name: 'City Skyline', url: 'https://images.unsplash.com/photo-1494526585095-c41746248156' },
        { name: 'Forest Trail', url: 'https://images.unsplash.com/photo-1506744038136-46273834b3fb' },
        { name: 'Desert Dunes', url: 'https://images.unsplash.com/photo-1501004318641-b39e6451bec6' },
        { name: 'City Night Lights', url: 'https://images.unsplash.com/photo-1501854140801-50d01698950b' },
        { name: 'Sunset Cliff', url: 'https://images.unsplash.com/photo-1482192596544-9eb780fc7f66' },
        { name: 'Frozen Lake', url: 'https://images.unsplash.com/photo-1470770841072-f978cf4d019e' },
        { name: 'Space View', url: 'https://images.unsplash.com/photo-1446776811953-b23d57bd21aa' },
        { name: 'Zen Garden', url: 'https://images.unsplash.com/photo-1520880867055-1e30d1cb001c' },


      ]);

  return (
    <div style={{ textAlign: 'center', padding: '20px' }}>
      <h1>GV App Gallery</h1>
      <br />
      <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center' }}>
        {images.map((img, idx) => (
          <motion.div
            key={idx}
            style={{ margin: '10px', textAlign: 'center' }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <img
              src={`${img.url}?auto=format&fit=crop&w=400&q=80`}
              alt={img.name}
              style={{ width: '200px', height: 'auto', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0,0,0,0.1)' }}
            />
            <p>{img.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

export default App;
