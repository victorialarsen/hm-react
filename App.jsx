import React from 'react';
import Card from './Card';

const App = () => {
  const data = [
    {
      img: 'image1.jpg',
      title: 'Delicious vegetables',
      description: 'Just monochrome veggies.',
    },
    {
      img: 'image2.jpg',
      title: 'Delicious meal',
      description: 'Suuuper delicious meal.',
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
