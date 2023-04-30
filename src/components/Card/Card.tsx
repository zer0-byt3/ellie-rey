// src/components/Card/Card.tsx
import React, { useState } from 'react';
import styles from './Card.module.css';
import { Document, Page } from 'react-pdf';

interface CardProps {
  title: string;
  imgSrc: string;
  altText: string;
  isPdf?: boolean;
  className?: string; // Add this line
}

const Card: React.FC<CardProps> = ({ title, imgSrc, altText, isPdf, className }) => {
  const [numPages, setNumPages] = useState<number | null>(null);

  function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
    setNumPages(numPages);
  }

  return (
    <div className={`${styles.card} ${className}`}> {/* Apply the className here */}
      <h3>{title}</h3>
      {isPdf ? (
        <Document file={imgSrc} onLoadSuccess={onDocumentLoadSuccess}>
          <Page pageNumber={1} width={200} />
        </Document>
      ) : (
        <img src={imgSrc} alt={altText} />
      )}
    </div>
  );
};

export default Card;
