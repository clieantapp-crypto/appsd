"use client";

import { useEffect, useState } from "react";
import { Shield, AlertTriangle } from "lucide-react";

const GeoBlocker = ({ children }: { children: React.ReactNode }) => {
  const [isBlocked, setIsBlocked] = useState(false);
  const [isChecking, setIsChecking] = useState(true);

  useEffect(() => {
    const checkLocation = async () => {
      try {
        const response = await fetch("https://ipapi.co/json/");
        const data = await response.json();

        const blockedCountries = ["JO", "KW"];

        if (blockedCountries.includes(data.country_code)) {
          setIsBlocked(true);
        }
      } catch (error) {
        console.error("Error checking location:", error);
      } finally {
        setIsChecking(false);
      }
    };

    checkLocation();
  }, []);

  if (isChecking) {
    return (
      <div className="fixed inset-0 bg-[#0b0c0a] flex items-center justify-center z-[10000]">
        <div className="flex flex-col items-center gap-4">
          <div className="w-16 h-16 border-4 border-lime-400 border-t-transparent rounded-full animate-spin" />
          <p className="text-white text-lg">جاري التحقق...</p>
        </div>
      </div>
    );
  }

  if (isBlocked) {
    return (
      <div className="fixed inset-0 bg-[#0b0c0a] flex items-center justify-center z-[10000]" dir="rtl">
        <div className="absolute top-14 right-10 w-60 h-60 bg-red-400/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-14 left-10 w-72 h-72 bg-orange-400/10 rounded-full blur-[140px]" />

        <div className="container max-w-md mx-auto px-4 relative z-10">
          <div className="bg-[#141614]/90 backdrop-blur-lg border border-red-500/20 rounded-2xl p-8 shadow-2xl">
            <div className="flex flex-col items-center text-center">
              <div className="w-20 h-20 rounded-full bg-gradient-to-br from-red-500 to-orange-500 flex items-center justify-center mb-6 shadow-xl">
                <AlertTriangle className="w-10 h-10 text-white" />
              </div>

              <h1 className="text-2xl font-bold text-white mb-4">
                عذراً، الوصول غير متاح
              </h1>

              <p className="text-gray-300 mb-6 leading-relaxed">
                نعتذر، هذه الخدمة غير متاحة في موقعك الجغرافي حالياً.
              </p>

              <div className="w-full bg-red-500/10 border border-red-500/20 rounded-xl p-4">
                <div className="flex items-center gap-3 justify-center">
                  <Shield className="w-5 h-5 text-red-400" />
                  <p className="text-sm text-gray-400">
                    الوصول محظور من موقعك
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return <>{children}</>;
};

export default GeoBlocker;
