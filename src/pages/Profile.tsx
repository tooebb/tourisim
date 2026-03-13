import { MapPin, Settings } from 'lucide-react';

export default function ProfilePage() {
  return (
    <div className="pb-24 min-h-screen bg-neo-bg">
      {/* Header Image */}
      <div className="relative h-48">
        <img
          src="https://images.unsplash.com/photo-1543097692-fa13c6cd8595?q=80&w=1000&auto=format&fit=crop"
          alt="Profile Header"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-0 left-0 right-0 pt-12 px-6 flex justify-between items-center text-white">
          <div className="text-sm font-medium">我的主页</div>
          <Settings size={20} />
        </div>
      </div>

      {/* Profile Info */}
      <div className="px-6 relative">
        <div className="absolute -top-12 left-6 w-24 h-24 rounded-full border-4 border-neo-bg overflow-hidden shadow-md">
          <img
            src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=200&auto=format&fit=crop"
            alt="Avatar"
            className="w-full h-full object-cover"
            referrerPolicy="no-referrer"
          />
        </div>
        
        <div className="pt-14 pb-6 border-b border-neo-light/20">
          <h1 className="text-2xl font-bold text-neo-dark mb-1">文途</h1>
          <div className="flex items-center text-neo-light text-xs gap-1">
            <MapPin size={12} />
            <span>北京</span>
          </div>
        </div>

        {/* About Me */}
        <div className="py-6 border-b border-neo-light/20">
          <h2 className="text-sm font-bold text-neo-dark mb-3">关于我</h2>
          <p className="text-xs text-neo-light leading-relaxed">
            「山河行吟者 × 古早味猎人 | 园林窗前的光影捕手，巷弄深处的故事拾荒人，偏爱用一碗茶的时间解读一座城的褶皱。」
          </p>
        </div>

        {/* My Posts */}
        <div className="py-6">
          <h2 className="text-sm font-bold text-neo-dark mb-4">我的帖子</h2>
          
          <div className="grid grid-cols-2 gap-4">
            {/* Post 1 */}
            <div className="bg-white rounded-2xl p-2 shadow-sm">
              <div className="h-32 rounded-xl overflow-hidden mb-2">
                <img
                  src="https://images.unsplash.com/photo-1582650625119-3a31f8fa2699?q=80&w=400&auto=format&fit=crop"
                  alt="Post 1"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xs font-bold text-neo-dark mb-1 px-1">鲁迅笔下江南</h3>
              <div className="flex justify-between items-center px-1 text-[10px] text-neo-light">
                <span>2.3 Months</span>
                <span>2 record</span>
              </div>
            </div>

            {/* Post 2 */}
            <div className="bg-white rounded-2xl p-2 shadow-sm">
              <div className="h-32 rounded-xl overflow-hidden mb-2">
                <img
                  src="https://images.unsplash.com/photo-1528701203486-9d3322143092?q=80&w=400&auto=format&fit=crop"
                  alt="Post 2"
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
              </div>
              <h3 className="text-xs font-bold text-neo-dark mb-1 px-1">沈从文的边城</h3>
              <div className="flex justify-between items-center px-1 text-[10px] text-neo-light">
                <span>3.8 Months</span>
                <span>Mixed record</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Button */}
        <div className="mt-4 pb-8">
          <button className="w-full py-3.5 bg-[#E8E4D9] text-[#5C5646] rounded-2xl font-bold text-sm shadow-sm active:scale-[0.98] transition-transform">
            查看我的文途总结
          </button>
        </div>
      </div>
    </div>
  );
}
