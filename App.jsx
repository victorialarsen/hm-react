<h3> Proj React Homework </h3>

import React from 'react';
import Card from './Card';

const App = () => {
  const data = [
    {
      img: 'https://images.pexels.com/photos/4587994/pexels-photo-4587994.jpeg',
      title: 'Cute Dog 1',
      description: 'A cute dog enjoying the sunshine.',
    },
    {
      img: 'https://images.pexels.com/photos/4588045/pexels-photo-4588045.jpeg',
      title: 'Cute Dog 2',
      description: 'Another adorable dog playing in the park.',
    },
  ];

  return (
    <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', padding: '20px' }}>
      {data.map((item, index) => (
        <Card key={index} img={item.img} title={item.title} description={item.description} />
      ))}
    </div>
  );
};

export default App;
