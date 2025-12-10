"use client"

import React from "react";
import { ClerkProvider } from "@clerk/nextjs";

export default function ClerkProviderWrapper({ children, appearance }) {
  return <ClerkProvider appearance={appearance}>{children}</ClerkProvider>;
}
