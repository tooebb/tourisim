import { Search, Bell, MapPin } from 'lucide-react';

export default function DiscoverPage() {
  return (
    <div className="pb-24 min-h-screen px-5 pt-12">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=200&auto=format&fit=crop" 
              alt="Avatar" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          <div>
            <div className="text-[10px] text-neo-light">你好文途！</div>
            <div className="text-sm font-bold text-neo-dark">今日推送</div>
          </div>
        </div>
        <div className="flex gap-3 text-neo-dark">
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm">
            <Search size={16} />
          </button>
          <button className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-sm relative">
            <Bell size={16} />
            <span className="absolute top-2 right-2 w-1.5 h-1.5 bg-red-500 rounded-full"></span>
          </button>
        </div>
      </div>

      {/* Discover Activities */}
      <div className="mb-8">
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-neo-dark">发现活动</h2>
          <span className="text-xs text-neo-light">推荐</span>
        </div>
        
        <div className="flex gap-4 overflow-x-auto no-scrollbar pb-2">
          {/* Activity Card 1 */}
          <div className="min-w-[200px] bg-white rounded-3xl p-2 shadow-sm">
            <div className="h-28 rounded-2xl overflow-hidden mb-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1545259641-5259d0f50711?q=80&w=400&auto=format&fit=crop" 
                alt="Activity 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-bold text-orange-500 flex items-center gap-1">
                <span>★</span> 4.8
              </div>
            </div>
            <h3 className="text-xs font-bold text-neo-dark mb-1 px-1 line-clamp-2">古代长城典故与诗词讲座</h3>
            <div className="text-[10px] text-neo-light px-1">2025/2/3</div>
          </div>

          {/* Activity Card 2 */}
          <div className="min-w-[200px] bg-white rounded-3xl p-2 shadow-sm">
            <div className="h-28 rounded-2xl overflow-hidden mb-2 relative">
              <img 
                src="https://images.unsplash.com/photo-1516980907201-943c13a8d03c?q=80&w=400&auto=format&fit=crop" 
                alt="Activity 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
              <div className="absolute top-2 right-2 bg-white/90 backdrop-blur-sm px-2 py-0.5 rounded-full text-[10px] font-bold text-orange-500 flex items-center gap-1">
                <span>★</span> 4.7
              </div>
            </div>
            <h3 className="text-xs font-bold text-neo-dark mb-1 px-1 line-clamp-2">老舍文化读书联盟——大家开讲</h3>
            <div className="text-[10px] text-neo-light px-1">2025/3/4</div>
          </div>
        </div>
      </div>

      {/* Banner */}
      <div className="relative h-32 rounded-3xl overflow-hidden shadow-sm mb-8">
        <img 
          src="https://images.unsplash.com/photo-1464822759023-fed622ff2c3b?q=80&w=800&auto=format&fit=crop" 
          alt="Banner" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30"></div>
        <div className="absolute inset-0 p-5 flex flex-col justify-center">
          <h3 className="text-white font-bold text-lg mb-1">「行李箱装得下远方，</h3>
          <h3 className="text-white font-bold text-lg mb-3">也装得下一本心仪的书」</h3>
          <button className="bg-neo-primary text-white text-xs font-bold px-4 py-1.5 rounded-full w-fit shadow-sm">
            了解详情
          </button>
        </div>
      </div>

      {/* Theme Recommendations */}
      <div>
        <div className="flex justify-between items-end mb-4">
          <h2 className="text-lg font-bold text-neo-dark">主题推荐</h2>
          <span className="text-xs text-neo-light">推荐</span>
        </div>

        <div className="space-y-3">
          {/* Theme List Item 1 */}
          <div className="bg-white p-3 rounded-2xl shadow-sm flex gap-3 items-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1599008986877-6284610190a4?q=80&w=200&auto=format&fit=crop" 
                alt="Theme 1" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-neo-dark mb-1">跟着课本游北京</h4>
              <div className="flex items-center gap-1 text-[10px] text-neo-light mb-2">
                <MapPin size={10} /> 中轴线
              </div>
              <div className="flex gap-2">
                <span className="px-2 py-0.5 bg-blue-50 text-blue-500 rounded text-[9px]">Male</span>
                <span className="px-2 py-0.5 bg-orange-50 text-orange-500 rounded text-[9px]">Adult</span>
              </div>
            </div>
          </div>

          {/* Theme List Item 2 */}
          <div className="bg-white p-3 rounded-2xl shadow-sm flex gap-3 items-center">
            <div className="w-16 h-16 rounded-xl overflow-hidden flex-shrink-0">
              <img 
                src="https://images.unsplash.com/photo-1508804185872-d7badad00f7d?q=80&w=200&auto=format&fit=crop" 
                alt="Theme 2" 
                className="w-full h-full object-cover"
                referrerPolicy="no-referrer"
              />
            </div>
            <div className="flex-1">
              <h4 className="text-sm font-bold text-neo-dark mb-1">跟着电影去旅游</h4>
              <div className="flex items-center gap-1 text-[10px] text-neo-light">
                <MapPin size={10} /> 故宫
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
