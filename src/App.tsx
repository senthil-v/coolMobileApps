import React, { useEffect, useState } from 'react';
import { BookOpen, Calendar, Home, Moon, Sun, Users } from 'lucide-react';
import { HomeView } from './components/HomeView';
import { LineageView } from './components/LineageView';
import { ParayanamView } from './components/ParayanamView';
import { OfflineIndicator, PWAInstallButton } from './components/PWAInstallButton';
import { TharpanamView } from './components/TharpanamView';
import { DeityId } from './data/deitiesData';
import { DEFAULT_LINEAGE_PROFILE, LineageProfile } from './data/tharpanamData';

type AppTab = 'home' | 'parayanam' | 'tharpanam' | 'lineage';

const LINEAGE_STORAGE_KEY = 'sannidhi_tharpanam_lineage_v1';
const AYYAPPA_COUNT_KEY = 'sannidhi_ayyappa_108_count_v1';
const THEME_STORAGE_KEY = 'sannidhi_theme_mode_v1';

export default function App() {
  const [activeTab, setActiveTab] = useState<AppTab>('home');
  const [selectedDeityId, setSelectedDeityId] = useState<DeityId>('siva');
  const [ayyappaFocusOpen, setAyyappaFocusOpen] = useState<boolean>(false);

  const [isDark, setIsDark] = useState<boolean>(() => {
    try {
      return localStorage.getItem(THEME_STORAGE_KEY) === 'dark';
    } catch {
      return false;
    }
  });

  const [lineage, setLineage] = useState<LineageProfile>(() => {
    try {
      const saved = localStorage.getItem(LINEAGE_STORAGE_KEY);
      if (saved) {
        return JSON.parse(saved) as LineageProfile;
      }
    } catch {
      // Fallback to default
    }
    return DEFAULT_LINEAGE_PROFILE;
  });

  const [ayyappaCount, setAyyappaCount] = useState<number>(() => {
    try {
      const saved = localStorage.getItem(AYYAPPA_COUNT_KEY);
      const parsed = saved ? Number(saved) : 0;
      return Number.isFinite(parsed) && parsed >= 0 && parsed <= 108 ? parsed : 0;
    } catch {
      return 0;
    }
  });

  useEffect(() => {
    const root = document.documentElement;
    if (isDark) {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    try {
      localStorage.setItem(THEME_STORAGE_KEY, isDark ? 'dark' : 'light');
    } catch {
      // Ignore storage quota issues
    }
  }, [isDark]);

  const handleSaveLineage = (next: LineageProfile) => {
    setLineage(next);
    try {
      localStorage.setItem(LINEAGE_STORAGE_KEY, JSON.stringify(next));
    } catch {
      // Ignore storage quota issues
    }
  };

  const handleChangeAyyappaCount = (next: number) => {
    const clamped = Math.max(0, Math.min(108, next));
    setAyyappaCount(clamped);
    try {
      localStorage.setItem(AYYAPPA_COUNT_KEY, String(clamped));
    } catch {
      // Ignore storage quota issues
    }
  };

  const handleSelectDeityFromHome = (deityId: DeityId, open108 = false) => {
    setSelectedDeityId(deityId);
    setAyyappaFocusOpen(open108);
    setActiveTab('parayanam');
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleTabChange = (tab: AppTab) => {
    setActiveTab(tab);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#FAF8F5] dark:bg-[#14110F] text-[#1F1A17] dark:text-[#F5EFE6] transition-colors">
      {/* Top Bar: Strictly 3-Zone Contract on Desktop, Compact 56px Bar on Mobile */}
      <header className="sticky top-0 z-30 h-14 lg:h-16 bg-white/90 dark:bg-[#1C1815]/90 backdrop-blur-md border-b border-[#E7E1D8] dark:border-[#302924] pt-safe">
        <div className="max-w-6xl mx-auto h-full px-4 sm:px-6 flex items-center justify-between gap-8">
          {/* Zone 1: Single-element Brand Wordmark */}
          <button
            type="button"
            onClick={() => handleTabChange('home')}
            className="font-display text-2xl font-bold tracking-tight text-[#7C1D26] dark:text-[#E5B869] whitespace-nowrap shrink-0 cursor-pointer"
          >
            Sannidhi
          </button>

          {/* Zone 2: 4 Clean Single-Line Nav Links (Desktop) */}
          <nav className="hidden lg:flex items-center gap-7 text-sm font-medium" aria-label="Primary Navigation">
            {(
              [
                { id: 'home', label: 'Sanctum' },
                { id: 'parayanam', label: 'Parayanam' },
                { id: 'tharpanam', label: 'Tharpanam' },
                { id: 'lineage', label: 'Lineage' },
              ] as const
            ).map((item) => (
              <button
                key={item.id}
                type="button"
                onClick={() => handleTabChange(item.id)}
                className={`py-1 whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                  activeTab === item.id
                    ? 'text-[#7C1D26] dark:text-[#E5B869] font-semibold border-b-2 border-[#7C1D26] dark:border-[#E5B869]'
                    : 'text-[#5C524B] dark:text-[#B5AAA0] hover:text-[#1F1A17] dark:hover:text-[#F5EFE6]'
                }`}
              >
                {item.label}
              </button>
            ))}
          </nav>

          {/* Zone 3: Primary Action */}
          <div className="flex items-center gap-2 shrink-0">
            <PWAInstallButton />
          </div>
        </div>
      </header>

      {/* Main Content Workspace */}
      <main className="max-w-6xl mx-auto px-4 sm:px-6 pt-5 sm:pt-7 pb-24 lg:pb-12">
        {/* Subtle Workspace Toolbar for Theme Switch (Outside Header Contract) */}
        <div className="flex items-center justify-between gap-4 mb-4">
          <p className="text-xs text-[#7D7268] dark:text-[#968B80]">
            {activeTab === 'home' && 'Bhakthi Parayanam & Amavasai Tharpanam'}
            {activeTab === 'parayanam' && 'Devotional Parayanams · 6 Deities & 108 Saranam'}
            {activeTab === 'tharpanam' && 'Amavasai Tharpanam · 2026 & 2027'}
            {activeTab === 'lineage' && 'Family Ancestors · 3 Generations Paternal & Maternal'}
          </p>

          <button
            type="button"
            onClick={() => setIsDark((v) => !v)}
            className="inline-flex items-center gap-1.5 min-h-[36px] px-3 py-1 rounded-lg border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] text-xs font-medium text-[#5C524B] dark:text-[#D1C7BC] hover:bg-[#F4EFE8] dark:hover:bg-[#2A2420] whitespace-nowrap shrink-0 cursor-pointer"
          >
            {isDark ? <Sun className="w-3.5 h-3.5 text-[#E5B869]" /> : <Moon className="w-3.5 h-3.5 text-[#7C1D26]" />}
            <span>{isDark ? 'Daylight' : 'Sandhya'}</span>
          </button>
        </div>

        {activeTab === 'home' && (
          <HomeView
            onSelectDeity={handleSelectDeityFromHome}
            onNavigateTab={handleTabChange}
            lineage={lineage}
            ayyappaCount={ayyappaCount}
          />
        )}

        {activeTab === 'parayanam' && (
          <ParayanamView
            selectedDeityId={selectedDeityId}
            onSelectDeity={setSelectedDeityId}
            ayyappaFocusOpen={ayyappaFocusOpen}
            onToggleAyyappaFocus={setAyyappaFocusOpen}
            ayyappaCount={ayyappaCount}
            onChangeAyyappaCount={handleChangeAyyappaCount}
          />
        )}

        {activeTab === 'tharpanam' && (
          <TharpanamView
            lineage={lineage}
            onEditLineage={() => handleTabChange('lineage')}
          />
        )}

        {activeTab === 'lineage' && (
          <LineageView
            lineage={lineage}
            onSaveLineage={handleSaveLineage}
            onGoToTharpanam={() => handleTabChange('tharpanam')}
          />
        )}
      </main>

      {/* Fixed Mobile Bottom Navigation Bar (Natural Thumb Zone, 64px height) */}
      <nav
        className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-white/95 dark:bg-[#1C1815]/95 backdrop-blur-md border-t border-[#E7E1D8] dark:border-[#302924] pb-safe"
        aria-label="Mobile Bottom Navigation"
      >
        <div className="grid grid-cols-4 h-16 items-center">
          {(
            [
              { id: 'home', label: 'Sanctum', icon: Home },
              { id: 'parayanam', label: 'Parayanam', icon: BookOpen },
              { id: 'tharpanam', label: 'Tharpanam', icon: Calendar },
              { id: 'lineage', label: 'Lineage', icon: Users },
            ] as const
          ).map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`min-h-[44px] h-full flex flex-col items-center justify-center gap-0.5 transition-colors cursor-pointer ${
                  isActive
                    ? 'text-[#7C1D26] dark:text-[#E5B869]'
                    : 'text-[#695F57] dark:text-[#968B80]'
                }`}
              >
                <Icon className="w-5 h-5" strokeWidth={isActive ? 2.2 : 1.75} />
                <span className="text-[11px] font-medium tracking-tight">{tab.label}</span>
              </button>
            );
          })}
        </div>
      </nav>

      <OfflineIndicator />
    </div>
  );
}
