import React, { useState } from 'react';
import { Download, Share, Smartphone, X } from 'lucide-react';
import { usePWAInstall } from '../hooks/usePWAInstall';
import { useOnlineStatus } from '../hooks/useOnlineStatus';

export const PWAInstallButton: React.FC = () => {
  const { isInstallable, isInstalled, isIOS, install } = usePWAInstall();
  const [showGuide, setShowGuide] = useState(false);

  if (isInstalled) {
    return null;
  }

  if (isInstallable) {
    return (
      <button
        type="button"
        onClick={() => void install()}
        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-4 py-2 rounded-xl bg-[#7C1D26] text-white text-xs font-semibold hover:bg-[#64161E] active:scale-[0.98] transition-all whitespace-nowrap shrink-0 cursor-pointer"
      >
        <Download className="w-4 h-4" strokeWidth={2} />
        <span>Install App</span>
      </button>
    );
  }

  return (
    <>
      <button
        type="button"
        onClick={() => setShowGuide(true)}
        className="inline-flex items-center justify-center gap-2 min-h-[44px] px-3.5 py-2 rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-white dark:bg-[#1E1A17] text-[#1F1A17] dark:text-[#F5EFE6] text-xs font-medium hover:bg-[#F4EFE8] dark:hover:bg-[#2A2420] transition-colors whitespace-nowrap shrink-0 cursor-pointer"
      >
        <Smartphone className="w-4 h-4 text-[#7C1D26] dark:text-[#E5B869]" strokeWidth={1.8} />
        <span>{isIOS ? 'Add to iPhone' : 'Install App'}</span>
      </button>

      {showGuide && (
        <div
          className="fixed inset-0 z-50 flex items-end sm:items-center justify-center bg-black/55 backdrop-blur-sm p-0 sm:p-4"
          role="dialog"
          aria-modal="true"
          aria-labelledby="install-guide-title"
        >
          <div className="w-full sm:max-w-md rounded-t-3xl sm:rounded-2xl bg-white dark:bg-[#1C1815] border border-[#E7E1D8] dark:border-[#302924] p-6 shadow-2xl">
            <div className="w-10 h-1.5 bg-[#D8CFC3] dark:bg-[#3A322C] rounded-full mx-auto mb-4 sm:hidden" />
            <div className="flex items-start justify-between gap-4">
              <div>
                <h3
                  id="install-guide-title"
                  className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]"
                >
                  Install Sannidhi on Mobile
                </h3>
                <p className="mt-1 text-sm text-[#695F57] dark:text-[#B5AAA0]">
                  Use Parayanam &amp; Amavasai Tharpanam offline anytime.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowGuide(false)}
                aria-label="Close install instructions"
                className="min-h-[44px] min-w-[44px] flex items-center justify-center rounded-xl text-[#695F57] hover:bg-[#F4EFE8] dark:hover:bg-[#2A2420] cursor-pointer"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="mt-5 space-y-4 text-sm text-[#362E29] dark:text-[#E2D9CE]">
              <div className="rounded-xl border border-[#E7E1D8] dark:border-[#302924] p-4 bg-[#FAF8F5] dark:bg-[#14110F]">
                <p className="font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                  Apple iPhone &amp; iPad (Safari)
                </p>
                <ol className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#695F57] dark:text-[#B5AAA0] list-decimal list-inside">
                  <li>
                    Tap the <Share className="inline w-3.5 h-3.5 mx-0.5 align-text-bottom" />{' '}
                    <strong>Share</strong> button in Safari&apos;s toolbar.
                  </li>
                  <li>
                    Scroll down and select <strong>Add to Home Screen</strong>.
                  </li>
                  <li>Tap <strong>Add</strong> to launch Sannidhi like a native iOS app.</li>
                </ol>
              </div>

              <div className="rounded-xl border border-[#E7E1D8] dark:border-[#302924] p-4 bg-[#FAF8F5] dark:bg-[#14110F]">
                <p className="font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                  Android (Chrome / Edge)
                </p>
                <ol className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#695F57] dark:text-[#B5AAA0] list-decimal list-inside">
                  <li>Open the browser menu (three dots in the top corner).</li>
                  <li>
                    Tap <strong>Install app</strong> or <strong>Add to Home screen</strong>.
                  </li>
                  <li>Confirm to install Sannidhi with full offline support.</li>
                </ol>
              </div>
            </div>

            <button
              type="button"
              onClick={() => setShowGuide(false)}
              className="mt-6 w-full min-h-[48px] rounded-xl bg-[#7C1D26] text-white text-sm font-semibold hover:bg-[#64161E] transition-colors cursor-pointer"
            >
              Done
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export const OfflineIndicator: React.FC = () => {
  const isOnline = useOnlineStatus();

  if (isOnline) return null;

  return (
    <div
      role="status"
      className="fixed bottom-20 lg:bottom-6 left-4 right-4 sm:left-auto sm:right-6 z-40 rounded-xl border border-[#D99B26]/40 bg-[#2C1F12] text-[#FDE8C8] px-4 py-2.5 text-xs font-medium shadow-lg"
    >
      Offline Mode — All Parayanam texts, 108 Saranam &amp; stored Tharpanam lineage remain available.
    </div>
  );
};
