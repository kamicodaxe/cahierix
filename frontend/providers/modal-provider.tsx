"use client";

import { useEffect, useState } from "react";

export const ModalProvider = ({}) => {
  const [isMounted, setIsmounted] = useState(false);

  useEffect(() => {
    setIsmounted(false);
  }, []);

  if (!isMounted) {
    return null;
  }

};
