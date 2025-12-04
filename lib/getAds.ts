export async function getAds() {
  const res = await fetch("/api/ads", { cache: "no-store" });
  return res.json();
}