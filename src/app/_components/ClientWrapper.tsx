// src/app/_components/ClientWrapper.tsx
"use client";

import { SessionProvider } from "next-auth/react";
import React from "react";

const ClientWrapper = ({ children }: { children: React.ReactNode }) => {
  return <SessionProvider>{children}</SessionProvider>;
};

export default ClientWrapper;
