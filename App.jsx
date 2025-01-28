import React from 'react';
import Card from './Card';

const App = () => {
  const data = [
    {
      img: 'image.jpg',
      title: 'Cute Dog 1',
      description: 'A cute dog enjoying the sunshine.',
    },
    {
      img: 'image1.jpg',
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
