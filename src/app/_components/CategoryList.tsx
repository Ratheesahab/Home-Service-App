import Image from 'next/image'
import Link from 'next/link'
import React from 'react'
import  Category  from "@/app/types/Category"

interface Props {
    categoryList: Category[];
}

function CategoryList({ categoryList } : Props) {
  return (
    <div className="mx-4 md:mx-22 lg:mx-52 grid grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
      {categoryList.length > 0
        ? categoryList.map((category: Category, index:number) => (
            <Link
              href={"/search/" + category.name}
              key={index}
              className={`flex flex-col items-center justify-center gap-2 bg-purple-50 p-5 rounded-lg cursor-pointer hover:scale-110 transition-all ease-in-out`}
            >
              {/* Only render image if icon is available */}
              {category.icon?.url ? (
                <Image
                  src={category.icon.url}
                  alt="icon"
                  width={35}
                  height={35}
                />
              ) : (
                <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
                  {/* Placeholder if icon is missing */}
                  <span className="text-gray-500">No Icon</span>
                </div>
              )}
              <h2 className="text-primary">{category.name}</h2>
            </Link>
          ))
        : [1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="h-[120px] w-full bg-slate-200 animate-pulse rounded-lg"
            ></div>
          ))}
    </div>
  );
}

export default CategoryList;