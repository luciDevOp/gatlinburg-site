import React from 'react';

type SectionTitleProps = {
  title: string;
  subtitle: string;
};

const SectionTitle: React.FC<SectionTitleProps> = ({ title, subtitle }) => {
  return (
    <div className="text-center mb-16">
      <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">{title}</h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto">{subtitle}</p>
      <div className="w-24 h-1 bg-amber-500 mx-auto mt-6"></div>
    </div>
  );
};

export default SectionTitle;