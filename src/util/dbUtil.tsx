'use client';

import { dataProps } from '@/types';
import React from 'react';
import { addDataToDb } from '@/helpers/addToDb';

type Props = {};

function DbUtility({
  folded,
  gender,
  brandName,
  description,
  finalPrice,
  strickPrice,
  discount,
  productSize,
  link,
  isFeatured,
  message,
}: dataProps) {
  const handleSubmit = async (e) => {
    e.preventDefault();
    const added = await addDataToDb(
      folded,
      description,
      finalPrice,
      strickPrice,
      discount,
      productSize,
      link,
      isFeatured,
      message
    );
  };
  if (added) {
    return true;
  }
  return <div></div>;
}

export default DbUtility;
