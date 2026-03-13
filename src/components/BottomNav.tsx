import { Home, Heart, Plus, MessageCircle, User } from 'lucide-react';

interface BottomNavProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

export default function BottomNav({ activeTab, setActiveTab }: BottomNavProps) {
  const navItems = [
    { id: 'home', icon: Home, label: '首页' },
    { id: 'wishlist', icon: Heart, label: '心愿单' },
    { id: 'publish', icon: Plus, label: '发布', isFab: true },
    { id: 'messages', icon: MessageCircle, label: '消息' },
    { id: 'profile', icon: User, label: '我的' },
  ];

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white shadow-[0_-4px_20px_rgba(0,0,0,0.05)] rounded-t-3xl px-6 py-2 pb-safe z-50">
      <div className="flex justify-between items-center relative">
        {navItems.map((item) => {
          const isActive = activeTab === item.id;
          const Icon = item.icon;

          if (item.isFab) {
            return (
              <button
                key={item.id}
                onClick={() => setActiveTab(item.id)}
                className="relative -top-6 flex flex-col items-center justify-center"
              >
                <div className="w-14 h-14 bg-neo-primary rounded-full flex items-center justify-center shadow-lg shadow-neo-primary/30 text-white transform transition-transform active:scale-95">
                  <Icon size={28} strokeWidth={2.5} />
                </div>
              </button>
            );
          }

          return (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className="flex flex-col items-center justify-center w-12 h-12 gap-1 transition-colors"
            >
              <Icon
                size={24}
                className={isActive ? 'text-neo-primary' : 'text-neo-light'}
                strokeWidth={isActive ? 2.5 : 2}
              />
              <span
                className={`text-[10px] font-medium ${
                  isActive ? 'text-neo-primary' : 'text-neo-light'
                }`}
              >
                {item.label}
              </span>
            </button>
          );
        })}
      </div>
    </div>
  );
}
