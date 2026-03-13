export default function PlaceholderPage({ title }: { title: string }) {
  return (
    <div className="flex items-center justify-center min-h-screen pb-24">
      <div className="text-center">
        <h1 className="text-2xl font-bold text-neo-dark mb-2">{title}</h1>
        <p className="text-neo-light text-sm">页面开发中...</p>
      </div>
    </div>
  );
}
