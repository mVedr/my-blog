import React, { useState, useEffect } from 'react';

import Link from 'next/link';
import Image from 'next/image'
import { getCategories } from '../services';

const Header = () => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    getCategories().then((newCategories) => {
      setCategories(newCategories);
    });
  }, []);

  return (
    <div className="container mx-auto px-10 mb-8">
      <div className="border-b w-full inline-block border-blue-400 py-8">
        <div className="md:float-left flex">
          <Link href="https://vedcreation.com">
          <span className="cursor-pointer font-bold text-5xl text-white px-5"> &larr;  </span>
          </Link>
          <Link href="/">
            <span className="cursor-pointer font-bold text-4xl text-white">Ved&#39;s personal space !</span>
          </Link>
        </div>
        <div className="hidden md:float-left md:contents">
          {categories.map((category, index) => (
            <Link key={index} href={`/category/${category.slug}`}><span className="md:float-right mt-2 align-middle text-white ml-4 font-semibold cursor-pointer">{category.name}</span></Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Header;