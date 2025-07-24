"use client"
import Image from "next/image";
import Header from "@/app/_components/Header";
import Hero from "@/app/_components/Hero";
import CategoryList from "@/app/_components/CategoryList";
import BusinessList from "@/app/_components/BusinessList";
import GlobalApi from "@/app/_Services/GlobalApi";
import { useState, useEffect } from "react";

// Define types
interface Category {
  id: string;
  name: string;
  bgcolor: {
    hex: string;
  };
  icon: {
    url: string;
  } | null;
}

interface Business {
  id: string;
  name: string;
  contactPerson: string;
  address: string;
  category: {
    name: string;
  };
  images: {
    url: string;
  }[];
}

export default function Home() {
  const [categoryList, setCategoryList] = useState<Category[]>([]);
  const [businessList, setBusinessList] = useState<Business[]>([]);

  useEffect(() => {
    getCategoryList();
    getAllBusinessList();
  }, []);

  const getCategoryList = () => {
    GlobalApi.getCategory().then((resp) => {
      console.log(resp);
      setCategoryList(resp.categories);
    });
  };

  const getAllBusinessList = () => {
    GlobalApi.getAllBusinessList().then((resp) => {
      console.log(resp)
      setBusinessList(resp.businessLists);
    });
  };

  return (
    <div>
      <Header />
      <Hero />
      <CategoryList categoryList={categoryList} />
      <BusinessList businessList={businessList} title="Popular Business" />
    </div>
  );
}
