import { Mic, Search, MapPin, Clock, Heart } from 'lucide-react';

export default function HomePage() {
  return (
    <div className="pb-24 min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 rounded-b-[40px] overflow-hidden shadow-sm">
        <img
          src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=1000&auto=format&fit=crop"
          alt="Great Wall"
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-black/30 via-transparent to-black/10"></div>
        
        {/* Top Status Area (Mock) */}
        <div className="absolute top-0 left-0 right-0 pt-12 px-6 flex justify-between items-center text-white">
          <div className="text-sm font-medium tracking-wider">文途知己</div>
          <Search size={20} />
        </div>
      </div>

      <div className="px-5 -mt-8 relative z-10 space-y-6">
        {/* AI Assistant Bar */}
        <div className="bg-white rounded-full p-2 pr-4 flex items-center shadow-md shadow-black/5 backdrop-blur-sm">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-neo-bg">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
              alt="AI Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <span className="ml-3 text-sm font-medium text-neo-dark flex-1">
            Hi, 我是AI助手小文~ <span className="text-neo-primary">✍️</span>
          </span>
          <button className="w-8 h-8 rounded-full bg-neo-bg flex items-center justify-center text-neo-dark">
            <Mic size={16} />
          </button>
        </div>

        {/* Two Main Feature Cards */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-[#E8F0F4] to-[#D1E1E8] p-5 rounded-3xl relative overflow-hidden shadow-sm">
            <h3 className="text-lg font-bold text-[#2C4A5E] mb-1">文途知己</h3>
            <p className="text-xs text-[#4A6B7C] mb-4 w-4/5">让诗和远方触手可及</p>
            <button className="bg-[#B8D4E0] text-[#2C4A5E] text-xs font-bold px-4 py-1.5 rounded-full shadow-sm">
              发现
            </button>
            {/* Decorative element */}
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/20 rounded-full blur-xl"></div>
          </div>

          <div className="bg-gradient-to-br from-[#EAF2E3] to-[#D5E8C6] p-5 rounded-3xl relative overflow-hidden shadow-sm">
            <h3 className="text-lg font-bold text-[#3A5A1E] mb-1">文学数字人</h3>
            <p className="text-xs text-[#5C7A40] mb-4 w-4/5">与历史对话...</p>
            <button className="bg-neo-primary text-white text-xs font-bold px-4 py-1.5 rounded-full shadow-sm shadow-neo-primary/30">
              立即体验
            </button>
            <div className="absolute -bottom-4 -right-4 w-20 h-20 bg-white/30 rounded-full blur-xl"></div>
          </div>
        </div>

        {/* Hot Itineraries Section */}
        <div>
          <div className="flex justify-between items-end mb-4 px-1">
            <h2 className="text-xl font-bold text-neo-dark tracking-wide">今日行程热点</h2>
            <span className="text-xs text-neo-light font-medium">主题推荐</span>
          </div>

          {/* Chips */}
          <div className="flex gap-3 overflow-x-auto no-scrollbar pb-2 px-1">
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-[#1A3B32] text-white text-sm font-medium shadow-md shadow-[#1A3B32]/20">
              北京电影文化线
            </button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-transparent text-neo-light text-sm font-medium border border-neo-light/20">
              史铁生人生哲思路
            </button>
            <button className="whitespace-nowrap px-5 py-2 rounded-full bg-transparent text-neo-light text-sm font-medium border border-neo-light/20">
              鲁迅文学创作之旅
            </button>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-2 gap-4 mt-4">
            {/* Card 1 */}
            <div className="bg-white rounded-3xl p-3 shadow-sm flex flex-col gap-2">
              <div className="relative h-32 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1599008986877-6284610190a4?q=80&w=400&auto=format&fit=crop" 
                  alt="Forbidden City" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute top-2 right-2 w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-red-500">
                  <Heart size={14} fill="currentColor" />
                </button>
              </div>
              <div>
                <h4 className="font-bold text-sm text-neo-dark mb-1">山河烽火史诗游</h4>
                <div className="flex items-center gap-3 text-[10px] text-neo-light">
                  <span className="flex items-center gap-1"><Clock size={10} /> 1个月前</span>
                  <span className="flex items-center gap-1"><MapPin size={10} /> 北京</span>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-3xl p-3 shadow-sm flex flex-col gap-2">
              <div className="relative h-32 rounded-2xl overflow-hidden">
                <img 
                  src="https://images.unsplash.com/photo-1545259641-5259d0f50711?q=80&w=400&auto=format&fit=crop" 
                  alt="Opera" 
                  className="w-full h-full object-cover"
                  referrerPolicy="no-referrer"
                />
                <button className="absolute top-2 right-2 w-7 h-7 bg-white/80 backdrop-blur-sm rounded-full flex items-center justify-center text-neo-light">
                  <Heart size={14} />
                </button>
              </div>
              <div>
                <h4 className="font-bold text-sm text-neo-dark mb-1">影都怀柔</h4>
                <div className="flex items-center gap-3 text-[10px] text-neo-light">
                  <span className="flex items-center gap-1"><Clock size={10} /> 4个月前</span>
                  <span className="flex items-center gap-1"><MapPin size={10} /> 北京</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
