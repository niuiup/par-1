export default function AdCard({ ad }: any) {
  return (
    <div className="p-4 border rounded-xl bg-white shadow">
      <div className="font-bold text-lg">{ad.price ? ad.price + " ₽" : "Цена не указана"}</div>
      <div className="text-gray-600">{ad.city}</div>
      <div className="mt-2">{ad.raw_text?.slice(0, 150)}...</div>
      <div className="text-xs text-gray-400 mt-2">{ad.created_at}</div>
    </div>
  );
}