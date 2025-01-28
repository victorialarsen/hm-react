import React from 'react';
import Card from './Card';

const App = () => {
  const data = [
    {
      img: 'https://image.petmd.com/files/styles/863x625/public/2023-01/toy-poodle.jpg',
      title: 'Adorable Puppy',
      description: 'This is an adorable puppy laying on the floor.',
    },
    {
      img: 'https://apupabove.com/cdn/shop/articles/Toy_Poodle.webp',
      title: 'Happy Dog',
      description: 'A happy dog enjoying a sunny day at the park.',
    },
    {
      img: 'https://media-be.chewy.com/wp-content/uploads/toy-poodle-large-shutterstock-525256504-copy-538x350.jpg',
      title: 'Cute puppy',
      description: 'This little puppy is resting after a fun play session.q',
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
