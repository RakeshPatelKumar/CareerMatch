"use client";

import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home, Search, AlertCircle } from "lucide-react";

export default function NotFound() {
  return (
    <div className="min-h-screen flex items-center justify-center px-4 relative">
      <div className="grid-background"></div>
      
      <div className="text-center space-y-8 max-w-2xl relative z-10">
        {/* Icon */}
        <div className="flex justify-center">
          <div className="w-24 h-24 rounded-full bg-primary/20 flex items-center justify-center backdrop-blur-sm border-2 border-primary/30">
            <AlertCircle className="w-12 h-12 text-primary" />
          </div>
        </div>

        {/* 404 Number */}
        <div className="relative">
          <h1 className="text-[120px] md:text-[180px] font-bold gradient-title leading-none">
            404
          </h1>
        </div>

        {/* Message */}
        <div className="space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground">
            Page Not Found
          </h2>
          <p className="text-muted-foreground text-lg max-w-md mx-auto">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center pt-4">
          <Link href="/">
            <Button size="lg" className="w-full sm:w-auto gap-2">
              <Home className="h-5 w-5" />
              Back to Home
            </Button>
          </Link>
          <Link href="/dashboard">
            <Button size="lg" variant="outline" className="w-full sm:w-auto gap-2">
              <Search className="h-5 w-5" />
              Go to Dashboard
            </Button>
          </Link>
        </div>

        {/* Error Code */}
        <div className="pt-8">
          <p className="text-sm text-muted-foreground">
            Error 404 - Page Not Found
          </p>
        </div>
      </div>
    </div>
  );
}