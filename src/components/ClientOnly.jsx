"use client";
import { useState, useEffect } from "react";
import PageLoading from "./PageLoading";

const ClientOnly = ({ children }) => {
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);
  }, []);

  if (!hasMounted) return <PageLoading />;

  return <>{children}</>;
};

export default ClientOnly;
