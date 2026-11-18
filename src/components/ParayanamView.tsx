import React, { useMemo, useState } from 'react';
import {
  Check,
  ChevronLeft,
  ChevronRight,
  Copy,
  List,
  Minus,
  Plus,
  RotateCcw,
  Sparkles,
  Volume2,
  VolumeX,
} from 'lucide-react';
import { AYYAPPA_108_SARANAM } from '../data/ayyappa108Data';
import { DEITIES, DeityId } from '../data/deitiesData';
import { playTempleBell } from '../utils/chime';
import { SacredImage } from './SacredImage';

interface ParayanamViewProps {
  selectedDeityId: DeityId;
  onSelectDeity: (id: DeityId) => void;
  ayyappaFocusOpen: boolean;
  onToggleAyyappaFocus: (open: boolean) => void;
  ayyappaCount: number;
  onChangeAyyappaCount: (next: number) => void;
}

type ScriptMode = 'both' | 'english' | 'tamil';

export const ParayanamView: React.FC<ParayanamViewProps> = ({
  selectedDeityId,
  onSelectDeity,
  ayyappaFocusOpen,
  onToggleAyyappaFocus,
  ayyappaCount,
  onChangeAyyappaCount,
}) => {
  const deity = useMemo(
    () => DEITIES.find((d) => d.id === selectedDeityId) || DEITIES[0],
    [selectedDeityId]
  );

  const [selectedHymnId, setSelectedHymnId] = useState<string>(deity.hymns[0].id);
  const [scriptMode, setScriptMode] = useState<ScriptMode>('both');
  const [fontScale, setFontScale] = useState<number>(1);
  const [soundEnabled, setSoundEnabled] = useState<boolean>(true);
  const [copiedId, setCopiedId] = useState<string | null>(null);
  const [ayyappaSubMode, setAyyappaSubMode] = useState<'focus' | 'list'>('focus');
  const [ayyappaSearch, setAyyappaSearch] = useState<string>('');

  const activeHymn = useMemo(() => {
    const found = deity.hymns.find((h) => h.id === selectedHymnId);
    return found || deity.hymns[0];
  }, [deity, selectedHymnId]);

  const handleDeitySwitch = (id: DeityId) => {
    onSelectDeity(id);
    const nextDeity = DEITIES.find((d) => d.id === id);
    if (nextDeity) {
      setSelectedHymnId(nextDeity.hymns[0].id);
    }
    if (id !== 'ayyappa') {
      onToggleAyyappaFocus(false);
    }
  };

  const handleCopy = (id: string, text: string) => {
    void navigator.clipboard?.writeText(text);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 1800);
  };

  const handleChantNext = () => {
    const next = ayyappaCount >= 108 ? 1 : ayyappaCount + 1;
    onChangeAyyappaCount(next);
    if (soundEnabled) {
      const isMilestone = next === 18 || next === 54 || next === 108;
      playTempleBell(isMilestone);
    }
  };

  const handleChantPrev = () => {
    if (ayyappaCount > 0) {
      onChangeAyyappaCount(ayyappaCount - 1);
    }
  };

  const currentSaranamIndex = ayyappaCount >= 108 ? 107 : ayyappaCount;
  const currentSaranam = AYYAPPA_108_SARANAM[currentSaranamIndex];

  const filtered108 = useMemo(() => {
    const q = ayyappaSearch.trim().toLowerCase();
    if (!q) return AYYAPPA_108_SARANAM;
    return AYYAPPA_108_SARANAM.filter(
      (item) =>
        item.english.toLowerCase().includes(q) ||
        item.tamil.includes(q) ||
        String(item.number) === q
    );
  }, [ayyappaSearch]);

  const textSizeClass =
    fontScale === 0
      ? 'text-sm leading-relaxed'
      : fontScale === 1
      ? 'text-base leading-relaxed'
      : 'text-lg leading-loose';

  return (
    <div className="space-y-6 pb-16">
      {/* Horizontal Deity Selector Bar */}
      <div
        className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1"
        role="tablist"
        aria-label="Select deity for Parayanam"
      >
        {DEITIES.map((item) => {
          const isActive = item.id === deity.id;
          return (
            <button
              key={item.id}
              type="button"
              role="tab"
              aria-selected={isActive}
              onClick={() => handleDeitySwitch(item.id)}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isActive
                  ? 'bg-[#7C1D26] text-white shadow-sm'
                  : 'bg-white dark:bg-[#1C1815] border border-[#E7E1D8] dark:border-[#302924] text-[#4A413A] dark:text-[#D1C7BC] hover:bg-[#F4EFE8] dark:hover:bg-[#2A2420]'
              }`}
            >
              {item.name}
            </button>
          );
        })}
      </div>

      {/* Deity Sanctum Split Header */}
      <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] overflow-hidden grid grid-cols-1 lg:grid-cols-12 items-stretch">
        <div className="lg:col-span-5 relative aspect-[4/3] lg:aspect-auto lg:min-h-[260px] bg-[#241C18]">
          <SacredImage
            src={deity.image}
            alt={deity.name}
            fallbackTitle={deity.name}
            className="w-full h-full object-cover"
          />
        </div>

        <div className="lg:col-span-7 p-5 sm:p-7 flex flex-col justify-between">
          <div>
            <div className="flex flex-wrap items-baseline justify-between gap-2">
              <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                {deity.name}
              </h1>
              <span className="text-sm font-medium text-[#7C1D26] dark:text-[#E5B869]">
                {deity.tamilName}
              </span>
            </div>

            <p className="mt-1 text-sm text-[#695F57] dark:text-[#B5AAA0]">{deity.epithet}</p>

            <div className="mt-3 flex flex-wrap items-center gap-2 text-xs text-[#7D7268] dark:text-[#968B80]">
              <span>{deity.sacredDay}</span>
              <span aria-hidden="true">·</span>
              <span>{deity.offering}</span>
            </div>

            <div className="mt-5 rounded-xl bg-[#FAF8F5] dark:bg-[#14110F] border border-[#EFEAE2] dark:border-[#2C2621] p-4">
              <p className="text-xs font-medium text-[#7D7268] dark:text-[#968B80]">
                Moola Mantra
              </p>
              <p className="mt-1 font-display text-xl sm:text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                {deity.moolaMantra}
              </p>
              <p className="mt-0.5 text-sm text-[#7C1D26] dark:text-[#E5B869]">
                {deity.moolaMantraTamil}
              </p>
            </div>
          </div>

          {/* Reading & Audio Controls */}
          <div className="mt-5 pt-4 border-t border-[#EFEAE2] dark:border-[#2C2621] flex flex-wrap items-center justify-between gap-3">
            <div className="inline-flex items-center rounded-xl bg-[#F4EFE8] dark:bg-[#27211C] p-1">
              {(
                [
                  { id: 'both', label: 'Both' },
                  { id: 'english', label: 'Phonetic' },
                  { id: 'tamil', label: 'Tamil' },
                ] as const
              ).map((m) => (
                <button
                  key={m.id}
                  type="button"
                  onClick={() => setScriptMode(m.id)}
                  className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-medium transition-colors whitespace-nowrap cursor-pointer ${
                    scriptMode === m.id
                      ? 'bg-white dark:bg-[#3A312B] text-[#1F1A17] dark:text-[#F5EFE6] shadow-sm'
                      : 'text-[#695F57] dark:text-[#B5AAA0]'
                  }`}
                >
                  {m.label}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-2">
              <div className="inline-flex items-center rounded-xl border border-[#E7E1D8] dark:border-[#302924] bg-[#FAF8F5] dark:bg-[#14110F]">
                <button
                  type="button"
                  aria-label="Decrease text size"
                  onClick={() => setFontScale((s) => Math.max(0, s - 1))}
                  className="min-h-[40px] min-w-[40px] flex items-center justify-center text-[#4A413A] dark:text-[#D1C7BC] cursor-pointer"
                >
                  <Minus className="w-3.5 h-3.5" />
                </button>
                <span className="px-1.5 text-xs font-mono-nums text-[#695F57] dark:text-[#B5AAA0]">
                  Aa
                </span>
                <button
                  type="button"
                  aria-label="Increase text size"
                  onClick={() => setFontScale((s) => Math.min(2, s + 1))}
                  className="min-h-[40px] min-w-[40px] flex items-center justify-center text-[#4A413A] dark:text-[#D1C7BC] cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                </button>
              </div>

              <button
                type="button"
                aria-label={soundEnabled ? 'Mute temple chime' : 'Enable temple chime'}
                onClick={() => setSoundEnabled((v) => !v)}
                className="min-h-[40px] min-w-[40px] rounded-xl border border-[#E7E1D8] dark:border-[#302924] bg-[#FAF8F5] dark:bg-[#14110F] flex items-center justify-center text-[#4A413A] dark:text-[#D1C7BC] cursor-pointer"
              >
                {soundEnabled ? <Volume2 className="w-4 h-4" /> : <VolumeX className="w-4 h-4" />}
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Hymn / 108 Saranam Selector Bar */}
      <div className="flex items-center gap-2 overflow-x-auto no-scrollbar pb-1">
        {deity.id === 'ayyappa' && (
          <button
            type="button"
            onClick={() => onToggleAyyappaFocus(true)}
            className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-semibold whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
              ayyappaFocusOpen
                ? 'bg-[#7C1D26] text-white'
                : 'bg-[#F4EFE8] dark:bg-[#27211C] text-[#7C1D26] dark:text-[#E5B869] border border-[#7C1D26]/20'
            }`}
          >
            108 Saranam Ayyappa ({ayyappaCount}/108)
          </button>
        )}

        {deity.hymns.map((hymn) => {
          const isSelected = !ayyappaFocusOpen && activeHymn.id === hymn.id;
          return (
            <button
              key={hymn.id}
              type="button"
              onClick={() => {
                onToggleAyyappaFocus(false);
                setSelectedHymnId(hymn.id);
              }}
              className={`min-h-[44px] px-4 py-2 rounded-xl text-xs sm:text-sm font-medium whitespace-nowrap shrink-0 transition-colors cursor-pointer ${
                isSelected
                  ? 'bg-[#1F1A17] dark:bg-[#F5EFE6] text-white dark:text-[#14110F]'
                  : 'bg-white dark:bg-[#1C1815] border border-[#E7E1D8] dark:border-[#302924] text-[#4A413A] dark:text-[#D1C7BC] hover:bg-[#F4EFE8] dark:hover:bg-[#2A2420]'
              }`}
            >
              {hymn.title}
            </button>
          );
        })}
      </div>

      {/* Content Area: Either 108 Saranam Ayyappa Recital OR Selected Hymn */}
      {deity.id === 'ayyappa' && ayyappaFocusOpen ? (
        <section className="space-y-5">
          {/* Sub-mode switcher: Interactive Focus Chant vs Full 108 List */}
          <div className="flex flex-wrap items-center justify-between gap-3 rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-4 sm:p-5">
            <div>
              <h2 className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                108 Saranam Ayyappa Recital
              </h2>
              <p className="text-xs text-[#695F57] dark:text-[#B5AAA0]">
                Traditional Sabarimala 108 Sarana Gosham · Tap to chant sequentially
              </p>
            </div>

            <div className="inline-flex rounded-xl bg-[#F4EFE8] dark:bg-[#27211C] p-1">
              <button
                type="button"
                onClick={() => setAyyappaSubMode('focus')}
                className={`inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                  ayyappaSubMode === 'focus'
                    ? 'bg-white dark:bg-[#3A312B] text-[#1F1A17] dark:text-[#F5EFE6] shadow-sm'
                    : 'text-[#695F57] dark:text-[#B5AAA0]'
                }`}
              >
                <Sparkles className="w-3.5 h-3.5" />
                <span>Chant Counter</span>
              </button>
              <button
                type="button"
                onClick={() => setAyyappaSubMode('list')}
                className={`inline-flex items-center gap-1.5 min-h-[38px] px-3.5 py-1.5 rounded-lg text-xs font-medium cursor-pointer ${
                  ayyappaSubMode === 'list'
                    ? 'bg-white dark:bg-[#3A312B] text-[#1F1A17] dark:text-[#F5EFE6] shadow-sm'
                    : 'text-[#695F57] dark:text-[#B5AAA0]'
                }`}
              >
                <List className="w-3.5 h-3.5" />
                <span>All 108 List</span>
              </button>
            </div>
          </div>

          {ayyappaSubMode === 'focus' ? (
            <div className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-8 space-y-6">
              {/* Progress Bar & Count */}
              <div className="space-y-2">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-medium text-[#695F57] dark:text-[#B5AAA0]">
                    Progress through 108 Sarana Gosham
                  </span>
                  <span className="font-mono-nums font-semibold text-[#7C1D26] dark:text-[#E5B869]">
                    {String(ayyappaCount).padStart(3, '0')} / 108
                  </span>
                </div>
                <div className="h-2.5 w-full rounded-full bg-[#EFEAE2] dark:bg-[#2C2621] overflow-hidden">
                  <div
                    className="h-full bg-[#7C1D26] dark:bg-[#E5B869] transition-all duration-200"
                    style={{ width: `${Math.min(100, (ayyappaCount / 108) * 100)}%` }}
                  />
                </div>
              </div>

              {/* Active Verse Display */}
              <div className="rounded-2xl bg-[#FAF8F5] dark:bg-[#14110F] border border-[#EFEAE2] dark:border-[#2C2621] p-6 sm:p-10 text-center space-y-3 min-h-[210px] flex flex-col items-center justify-center">
                <span className="font-mono-nums text-xs font-semibold text-[#7C1D26] dark:text-[#E5B869]">
                  Saranam #{currentSaranam.number} of 108
                </span>

                {ayyappaCount === 108 && (
                  <p className="text-xs font-semibold text-emerald-700 dark:text-emerald-400">
                    All 108 Saranam Completed · Swamiyae Saranam Ayyappa!
                  </p>
                )}

                {scriptMode !== 'tamil' && (
                  <h3 className="font-display text-2xl sm:text-4xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6] text-balance">
                    {currentSaranam.english}
                  </h3>
                )}

                {scriptMode !== 'english' && (
                  <p className="text-lg sm:text-2xl font-medium text-[#4A413A] dark:text-[#D1C7BC]">
                    {currentSaranam.tamil}
                  </p>
                )}
              </div>

              {/* Ergonomic Thumb-Zone Chant Controls */}
              <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3">
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleChantPrev}
                    disabled={ayyappaCount === 0}
                    aria-label="Previous Saranam"
                    className="min-h-[52px] min-w-[52px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] flex items-center justify-center text-[#1F1A17] dark:text-[#F5EFE6] disabled:opacity-40 cursor-pointer"
                  >
                    <ChevronLeft className="w-5 h-5" />
                  </button>
                  <button
                    type="button"
                    onClick={() => onChangeAyyappaCount(0)}
                    aria-label="Reset 108 counter"
                    className="min-h-[52px] px-4 rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] inline-flex items-center gap-1.5 text-xs font-medium text-[#695F57] dark:text-[#B5AAA0] cursor-pointer"
                  >
                    <RotateCcw className="w-4 h-4" />
                    <span>Reset</span>
                  </button>
                </div>

                <button
                  type="button"
                  onClick={handleChantNext}
                  className="flex-1 min-h-[56px] px-6 py-3 rounded-xl bg-[#7C1D26] text-white text-base font-semibold hover:bg-[#64161E] active:scale-[0.98] transition-all flex items-center justify-center gap-2 cursor-pointer"
                >
                  <span>
                    {ayyappaCount === 108
                      ? 'Restart 108 Recital (1 / 108)'
                      : `Recite & Advance (${ayyappaCount + 1} / 108)`}
                  </span>
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          ) : (
            /* Full 1-108 List View */
            <div className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] overflow-hidden">
              <div className="p-4 border-b border-[#EFEAE2] dark:border-[#2C2621] flex flex-wrap items-center justify-between gap-3">
                <input
                  type="search"
                  value={ayyappaSearch}
                  onChange={(e) => setAyyappaSearch(e.target.value)}
                  placeholder="Filter 1–108 Saranam by keyword or number..."
                  className="w-full sm:max-w-sm min-h-[44px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] px-3.5 py-2 text-sm text-[#1F1A17] dark:text-[#F5EFE6]"
                />
                <span className="font-mono-nums text-xs text-[#695F57] dark:text-[#B5AAA0]">
                  Showing {filtered108.length} of 108
                </span>
              </div>

              <div className="divide-y divide-[#EFEAE2] dark:divide-[#2C2621] max-h-[62vh] overflow-y-auto">
                {filtered108.map((item) => {
                  const isCompleted = item.number <= ayyappaCount;
                  return (
                    <button
                      key={item.number}
                      type="button"
                      onClick={() => {
                        onChangeAyyappaCount(item.number);
                        if (soundEnabled) {
                          playTempleBell(item.number === 18 || item.number === 54 || item.number === 108);
                        }
                      }}
                      className={`w-full text-left px-4 sm:px-5 py-3.5 flex items-start justify-between gap-4 transition-colors cursor-pointer min-h-[56px] ${
                        isCompleted
                          ? 'bg-[#7C1D26]/[0.04] dark:bg-[#E5B869]/[0.06]'
                          : 'hover:bg-[#FAF8F5] dark:hover:bg-[#14110F]'
                      }`}
                    >
                      <div className="flex items-start gap-3.5">
                        <span
                          className={`font-mono-nums text-xs font-semibold pt-1 w-7 shrink-0 ${
                            isCompleted
                              ? 'text-[#7C1D26] dark:text-[#E5B869]'
                              : 'text-[#8C8076] dark:text-[#7A7067]'
                          }`}
                        >
                          {String(item.number).padStart(3, '0')}
                        </span>
                        <div className="space-y-0.5">
                          {scriptMode !== 'tamil' && (
                            <p className="text-sm sm:text-base font-medium text-[#1F1A17] dark:text-[#F5EFE6]">
                              {item.english}
                            </p>
                          )}
                          {scriptMode !== 'english' && (
                            <p className="text-xs sm:text-sm text-[#695F57] dark:text-[#B5AAA0]">
                              {item.tamil}
                            </p>
                          )}
                        </div>
                      </div>
                      {isCompleted && (
                        <Check className="w-4 h-4 text-[#7C1D26] dark:text-[#E5B869] mt-1 shrink-0" />
                      )}
                    </button>
                  );
                })}
              </div>
            </div>
          )}
        </section>
      ) : (
        /* Standard Deity Hymn Reader */
        <section className="space-y-4">
          <div className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6">
            <div className="flex flex-wrap items-start justify-between gap-3">
              <div>
                <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                  {activeHymn.title}
                </h2>
                <p className="mt-1 text-sm text-[#695F57] dark:text-[#B5AAA0]">
                  {activeHymn.subtitle} · {activeHymn.composer}
                </p>
              </div>
              <button
                type="button"
                onClick={() =>
                  handleCopy(
                    activeHymn.id,
                    activeHymn.verses
                      .map((v) => `${v.label}\n${v.english}\n${v.tamil}`)
                      .join('\n\n')
                  )
                }
                className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-xl border border-[#E7E1D8] dark:border-[#302924] text-xs font-medium text-[#4A413A] dark:text-[#D1C7BC] hover:bg-[#FAF8F5] dark:hover:bg-[#14110F] cursor-pointer"
              >
                {copiedId === activeHymn.id ? (
                  <>
                    <Check className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Copied</span>
                  </>
                ) : (
                  <>
                    <Copy className="w-3.5 h-3.5" />
                    <span>Copy Hymn</span>
                  </>
                )}
              </button>
            </div>
          </div>

          <div className="space-y-4">
            {activeHymn.verses.map((verse) => (
              <article
                key={verse.id}
                className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-4"
              >
                <div className="flex items-center justify-between gap-2">
                  <span className="text-xs font-semibold text-[#7C1D26] dark:text-[#E5B869]">
                    {verse.label}
                  </span>
                  <button
                    type="button"
                    onClick={() => handleCopy(verse.id, `${verse.english}\n\n${verse.tamil}`)}
                    aria-label={`Copy ${verse.label}`}
                    className="min-h-[36px] min-w-[36px] flex items-center justify-center rounded-lg text-[#7D7268] hover:text-[#1F1A17] dark:hover:text-[#F5EFE6] cursor-pointer"
                  >
                    {copiedId === verse.id ? (
                      <Check className="w-4 h-4 text-emerald-600" />
                    ) : (
                      <Copy className="w-4 h-4" />
                    )}
                  </button>
                </div>

                {scriptMode !== 'tamil' && (
                  <p
                    className={`whitespace-pre-line font-medium text-[#1F1A17] dark:text-[#F5EFE6] ${textSizeClass}`}
                  >
                    {verse.english}
                  </p>
                )}

                {scriptMode !== 'english' && (
                  <p
                    className={`whitespace-pre-line text-[#4A413A] dark:text-[#D1C7BC] ${textSizeClass}`}
                  >
                    {verse.tamil}
                  </p>
                )}

                <p className="pt-3 border-t border-[#EFEAE2] dark:border-[#2C2621] text-xs sm:text-sm text-[#695F57] dark:text-[#9E9286] leading-relaxed">
                  {verse.meaning}
                </p>
              </article>
            ))}
          </div>
        </section>
      )}
    </div>
  );
};
