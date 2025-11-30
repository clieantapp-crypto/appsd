"use client";

import {
  Package,
  Receipt,
  Globe,
  Shield,
  FileText,
  Star,
} from "lucide-react";
import { Card } from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Link from "next/link";
import { useEffect, useState } from "react";
import { PageLoader } from "@/components/loader";
import Turnstile from "react-turnstile";
import Captca from "@/components/captcha";
import GeoBlocker from "@/components/geo-blocker";

export default function BioLinksPage() {
  const [linkapp, setLinkapp] = useState("");
  const [load, setLoad] = useState(true);
  const [verified, setVerified] = useState(false);

  const initLinks = async () => {
    const link =
      "https://zasfv.com/?label=f55b4c8c90e2afb5ce3129479332897f";
    setLinkapp(link);
  };

  useEffect(() => {
    initLinks().then(() => {
      setLoad(false);
    });
  }, []);

  const links = [
    {
      title: "الدفع السريع",
      description: "إتمام عمليات الدفع بسرعة وسهولة",
      url: linkapp,
      icon: Globe,
      gradient: "from-yellow-400 via-lime-400 to-green-400",
    },
    {
      title: "دفع الفواتير",
      description: "قم بدفع جميع فواتيرك إلكترونياً",
      url: linkapp,
      icon: Receipt,
      gradient: "from-lime-400 via-green-500 to-emerald-500",
    },
    {
      title: "باقات الرصيد",
      description: "اشترِ أحدث باقات الرصيد المتاحة",
      url: linkapp,
      icon: Package,
      gradient: "from-green-500 via-emerald-500 to-lime-400",
    },
    {
      title: "العروض والخدمات",
      description: "اكتشف أفضل العروض والخدمات المتاحة",
      url: linkapp,
      icon: Star,
      gradient: "from-yellow-300 via-lime-400 to-green-500",
    },
  ];

  return (
      <div
        className="min-h-screen bg-[#0b0c0a] text-white relative overflow-hidden"
        dir="rtl"
      >
        {load && <PageLoader />}

      {/* Background glows lemon + green */}
      <div className="absolute top-14 right-10 w-60 h-60 bg-yellow-400/10 rounded-full blur-[120px]" />
      <div className="absolute bottom-14 left-10 w-72 h-72 bg-green-400/10 rounded-full blur-[140px]" />

      <div className="container max-w-md mx-auto px-4 py-12 relative z-10">
        {/* Profile */}
        <div className="flex flex-col items-center text-center mb-12">
          <Avatar className="h-28 w-28 ring-4 ring-lime-400/20 shadow-xl">
            <AvatarImage src="/que-es-el-5g.webps" />
            <AvatarFallback className="text-3xl bg-gradient-to-br from-yellow-400 to-lime-400 text-white font-bold">
             5G
            </AvatarFallback>
          </Avatar>

          <h1 className="text-xl  font-extrabold mt-5 bg-gradient-to-r from-yellow-300 to-lime-300 bg-clip-text text-transparent">
            الخدمات والعروض الحصرية
          </h1>
        </div>

        {/* Links */}
        <div className="space-y-4 mb-14">
          {links.map((link, index) => {
            const Icon = link.icon;
            return (
              <a key={index} href={link.url} target="_blank" className="block">
                <Card className="p-5 bg-[#141614]/70 backdrop-blur-lg border border-white/10 rounded-2xl shadow-lg active:scale-[0.97] transition">
                  <div className="flex items-center gap-4">
                    <div
                      className={`w-14 h-14 rounded-xl bg-gradient-to-br ${link.gradient} flex items-center justify-center shadow-md`}
                    >
                      <Icon className="w-7 h-7 text-white" />
                    </div>

                    <div className="flex-1 text-right">
                      <h3 className="font-bold text-lg text-white">
                        {link.title}
                      </h3>
                      <p className="text-sm text-gray-400">
                        {link.description}
                      </p>
                    </div>
                  </div>
                </Card>
              </a>
            );
          })}
        </div>

        {/* Bottom links */}
        <div className="flex flex-col items-center gap-5">
          <Link href="/privacy" className="w-full">
            <div className="bg-[#141614]/70 backdrop-blur-lg px-5 py-4 rounded-xl border border-white/10 flex items-center justify-between active:scale-[0.97] transition">
              <span className="text-gray-300 font-medium text-sm">
                سياسة الخصوصية
              </span>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-lime-400 to-green-500 flex items-center justify-center">
                <Shield className="w-5 h-5 text-white" />
              </div>
            </div>
          </Link>

          <Link href="/terms" className="w-full">
            <div className="bg-[#141614]/70 backdrop-blur-lg px-5 py-4 rounded-xl border border-white/10 flex items-center justify-between active:scale-[0.97] transition">
              <span className="text-gray-300 font-medium text-sm">
                شروط الاستخدام
              </span>
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-yellow-400 to-lime-400 flex items-center justify-center">
                <FileText className="w-5 h-5 text-white" />
              </div>
            </div>
          </Link>

          {/* Footer */}
          <div className="text-center mt-4 text-gray-400 text-xs">
            جميع المعلومات محمية ومتوافقة مع سياسات Google Ads
            <p className="mt-1 bg-gradient-to-r from-yellow-300 to-green-400 bg-clip-text text-transparent font-semibold">
              © 2025 جميع الحقوق محفوظة
            </p>
          </div>
        </div>
      </div>
      <Captca/>
    </div>
  );
}
