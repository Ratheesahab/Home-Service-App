"use client"
import { use } from 'react';
import BusinessList from '@/app/_components/BusinessList';
import GlobalApi from "@/app/_Services/GlobalApi";
import React, { useEffect, useState } from 'react'

function BusinessByCategory({ params }: { params: Promise<{ category: string }> }) {

  const resolvedParams = use(params); // unwrap the async params
  const [businessList, setBusinessList] = useState([]);

  useEffect(() => {
    if (resolvedParams?.category) {
      getBusinessList(resolvedParams.category);
    }
  }, [resolvedParams]);

  const getBusinessList = (category: string) => {
    GlobalApi.getBusinessByCategory(category)
      .then(resp => {
        setBusinessList(resp?.businessLists);
      });
  };

  return (
    <div>
      <BusinessList title={resolvedParams.category} businessList={businessList} />
    </div>
  );
}

export default BusinessByCategory;
  