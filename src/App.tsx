/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useState } from 'react';
import BottomNav from './components/BottomNav';
import HomePage from './pages/Home';
import ProfilePage from './pages/Profile';
import DiscoverPage from './pages/Discover';
import PlaceholderPage from './pages/Placeholder';

export default function App() {
  const [activeTab, setActiveTab] = useState('home');

  const renderContent = () => {
    switch (activeTab) {
      case 'home':
        return <HomePage />;
      case 'wishlist':
        return <DiscoverPage />;
      case 'publish':
        return <PlaceholderPage title="发布内容" />;
      case 'messages':
        return <PlaceholderPage title="消息中心" />;
      case 'profile':
        return <ProfilePage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="max-w-md mx-auto bg-neo-bg min-h-screen relative shadow-2xl overflow-hidden">
      {/* Main Content Area */}
      <main className="h-full overflow-y-auto no-scrollbar">
        {renderContent()}
      </main>

      {/* Bottom Navigation */}
      <BottomNav activeTab={activeTab} setActiveTab={setActiveTab} />
    </div>
  );
}
