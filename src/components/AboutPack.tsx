'use client';

import React from 'react';

const AboutPack: React.FC = () => {
  return (
    <div className="w-full bg-white dark:bg-[#1A202C] py-32 border-t border-gray-100 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex items-center justify-between gap-16">
          <div className="flex-1">
            <div className="relative w-full aspect-[4/3] bg-gradient-to-r from-gray-50 to-gray-100 dark:from-gray-800 dark:to-gray-900 rounded-lg shadow-2xl">
              {/* Placeholder laptop image with gradient effect */}
              <div className="absolute inset-0 bg-gradient-to-r from-[#6B46C1]/20 to-[#F56565]/20 rounded-lg"></div>
            </div>
          </div>
          <div className="flex-1">
            <h2 className="text-4xl font-bold mb-6">
              <span className="text-[#9333EA]">SOBRE</span>{' '}
              <span className="text-[#F56565]">O PACK</span>
            </h2>
            <p className="text-[#2D3748] dark:text-gray-300 text-lg leading-relaxed">
              Se você quer otimizar seu tempo e criar vídeos de qualidade de forma rápida e fácil, nosso Pack de Edição é a solução perfeita. Com 8GB de arquivos de alta qualidade e uma aula em vídeo exclusiva, você aprenderá a editar seu primeiro vídeo de forma simples e eficiente, sem complicações. Economize horas no processo de edição e foque no que realmente importa: criatividade e resultado final.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPack; 