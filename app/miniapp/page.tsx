"use client";
import { useEffect, useState } from "react";
import { getAds } from "@/lib/getAds";
import Loader from "@/components/Loader";
import AdCard from "@/components/AdCard";

export default function MiniAppPage() {
  const [ads, setAds] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const tg = (window as any).Telegram?.WebApp;
    tg?.ready();
    tg?.expand();

    async function load() {
      const data = await getAds();
      setAds(data);
      setLoading(false);
    }

    load();
  }, []);

  if (loading) return <Loader />;

  return (
    <div className="space-y-4">
      {ads.length === 0 && <div>Нет объявлений</div>}
      {ads.map((item) => (
        <AdCard key={item.id} ad={item} />
      ))}
    </div>
  );
}