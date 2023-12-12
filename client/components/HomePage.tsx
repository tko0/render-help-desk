import React from 'react';
import Image from 'next/image';

const BackgroundImage: React.FC = () => {
  return (
    <div className="w-screen h-screen">
      <Image src="/background.png" alt="Background" priority={true} layout="fill" objectFit="cover" />
    </div>
  );
};

export default BackgroundImage;