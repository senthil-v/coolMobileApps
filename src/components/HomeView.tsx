import React from 'react';
import { ArrowRight, Calendar, ChevronRight, Users, Sparkles } from 'lucide-react';
import { DEITIES, DeityId, HERO_SANCTUM_IMAGE } from '../data/deitiesData';
import { AMAVASAI_DATES, AmavasaiDate, LineageProfile } from '../data/tharpanamData';
import { SacredImage } from './SacredImage';

interface HomeViewProps {
  onSelectDeity: (deityId: DeityId, open108?: boolean) => void;
  onNavigateTab: (tab: 'home' | 'parayanam' | 'tharpanam' | 'lineage') => void;
  lineage: LineageProfile;
  ayyappaCount: number;
}

export const HomeView: React.FC<HomeViewProps> = ({
  onSelectDeity,
  onNavigateTab,
  lineage,
  ayyappaCount,
}) => {
  const now = new Date();
  const todayIso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const nextAmavasai: AmavasaiDate =
    AMAVASAI_DATES.find((d) => d.isoDate >= todayIso) || AMAVASAI_DATES[1];

  const isLineageReady =
    lineage.paternalGotram.trim().length > 0 &&
    lineage.paternalMale.some((p) => p.name.trim().length > 0);

  return (
    <div className="space-y-8 pb-8">
      {/* Hero Sanctum Banner */}
      <section className="relative overflow-hidden rounded-2xl lg:rounded-3xl border border-[#E7E1D8] dark:border-[#302924] bg-[#1C1613]">
        <div className="relative h-64 sm:h-72 lg:h-80 w-full">
          <SacredImage
            src={HERO_SANCTUM_IMAGE}
            alt="Lit brass Kutthuvilakku oil lamp in a granite temple sanctum"
            fallbackTitle="Sannidhi Sanctum"
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
        </div>

        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-8 lg:p-10">
          <p className="text-xs font-medium tracking-wide text-[#F3D192]">
            Daily Parayanam · 108 Saranam Ayyappa · 2026–2027 Tharpanam
          </p>
          <h1 className="mt-1.5 font-display text-3xl sm:text-4xl lg:text-5xl font-semibold text-white leading-tight text-balance max-w-2xl">
            Sacred Daily Recitals &amp; Ancestral Offerings
          </h1>
          <div className="mt-4 flex flex-wrap items-center gap-3">
            <button
              type="button"
              onClick={() => onSelectDeity('ayyappa', true)}
              className="inline-flex items-center gap-2 min-h-[44px] px-5 py-2.5 rounded-xl bg-[#7C1D26] text-white text-sm font-semibold hover:bg-[#64161E] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
            >
              <span>Chant 108 Saranam Ayyappa</span>
              <ArrowRight className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => onNavigateTab('tharpanam')}
              className="inline-flex items-center gap-2 min-h-[44px] px-4 py-2.5 rounded-xl bg-white/15 backdrop-blur-md text-white border border-white/25 text-sm font-medium hover:bg-white/25 transition-colors whitespace-nowrap cursor-pointer"
            >
              <Calendar className="w-4 h-4 text-[#F3D192]" />
              <span>Amavasai Sankalpam</span>
            </button>
          </div>
        </div>
      </section>

      {/* Two-Column Quick Overview Strip: Next Amavasai + Lineage / 108 Counter */}
      <section className="grid grid-cols-1 lg:grid-cols-12 gap-4 items-stretch">
        <div className="lg:col-span-7 rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between gap-3">
              <span className="text-xs font-semibold text-[#7C1D26] dark:text-[#E5B869]">
                Next Upcoming Amavasai
              </span>
              <span className="font-mono-nums text-xs text-[#695F57] dark:text-[#B5AAA0]">
                {nextAmavasai.tamilDay} · {nextAmavasai.weekday}
              </span>
            </div>
            <h2 className="mt-2 font-display text-2xl sm:text-3xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              {nextAmavasai.displayDate}
            </h2>
            <p className="mt-1.5 text-sm text-[#695F57] dark:text-[#B5AAA0]">
              {nextAmavasai.samvatsara} · {nextAmavasai.masaTamil} ({nextAmavasai.masaSanskrit}) ·{' '}
              {nextAmavasai.nakshatraTamil} Nakshatram
            </p>
            <p className="mt-1 text-xs text-[#7D7268] dark:text-[#968B80]">
              {nextAmavasai.tithiNote}
            </p>
          </div>

          <div className="mt-5 pt-4 border-t border-[#EFEAE2] dark:border-[#2C2621] flex flex-wrap items-center justify-between gap-3">
            <span className="text-xs text-[#695F57] dark:text-[#B5AAA0]">
              {isLineageReady
                ? `Lineage ready · ${lineage.paternalGotram} Gotram`
                : 'Add 3-generation family names to personalize Sankalpam'}
            </span>
            <button
              type="button"
              onClick={() => onNavigateTab('tharpanam')}
              className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-xl bg-[#F4EFE8] dark:bg-[#2A2420] text-[#1F1A17] dark:text-[#F5EFE6] text-xs font-semibold hover:bg-[#EAE2D7] dark:hover:bg-[#352D28] transition-colors whitespace-nowrap cursor-pointer"
            >
              <span>Open Tharpanam</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>
        </div>

        <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-4">
          <button
            type="button"
            onClick={() => onSelectDeity('ayyappa', true)}
            className="text-left rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 hover:border-[#7C1D26]/40 dark:hover:border-[#E5B869]/40 transition-colors flex items-center justify-between gap-4 cursor-pointer min-h-[88px]"
          >
            <div>
              <p className="text-xs font-medium text-[#695F57] dark:text-[#B5AAA0]">
                Lord Ayyappa Recital
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                108 Saranam Gosham
              </p>
              <p className="mt-1 font-mono-nums text-xs text-[#7C1D26] dark:text-[#E5B869]">
                {ayyappaCount} / 108 recited
              </p>
            </div>
            <ChevronRight className="w-5 h-5 text-[#9C9085] shrink-0" />
          </button>

          <button
            type="button"
            onClick={() => onNavigateTab('lineage')}
            className="text-left rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 hover:border-[#7C1D26]/40 dark:hover:border-[#E5B869]/40 transition-colors flex items-center justify-between gap-4 cursor-pointer min-h-[88px]"
          >
            <div>
              <p className="text-xs font-medium text-[#695F57] dark:text-[#B5AAA0]">
                Ancestral Records
              </p>
              <p className="mt-1 font-display text-xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                3-Generation Lineage
              </p>
              <p className="mt-1 text-xs text-[#695F57] dark:text-[#B5AAA0]">
                {isLineageReady
                  ? 'Paternal & Maternal saved on device'
                  : 'Enter paternal & maternal elders'}
              </p>
            </div>
            <Users className="w-5 h-5 text-[#7C1D26] dark:text-[#E5B869] shrink-0" />
          </button>
        </div>
      </section>

      {/* 6 Deities Devotional Parayanam Grid */}
      <section>
        <div className="flex items-end justify-between gap-4 mb-4">
          <div>
            <h2 className="font-display text-2xl sm:text-3xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              Devotional Parayanams
            </h2>
            <p className="mt-0.5 text-sm text-[#695F57] dark:text-[#B5AAA0]">
              Sacred hymns, stotrams, and recitals for six presiding deities
            </p>
          </div>
          <button
            type="button"
            onClick={() => onNavigateTab('parayanam')}
            className="text-xs font-semibold text-[#7C1D26] dark:text-[#E5B869] hover:underline min-h-[44px] flex items-center whitespace-nowrap cursor-pointer"
          >
            View All
          </button>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {DEITIES.map((deity) => (
            <button
              key={deity.id}
              type="button"
              onClick={() => onSelectDeity(deity.id, false)}
              className="group text-left rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] overflow-hidden hover:border-[#7C1D26]/45 dark:hover:border-[#E5B869]/45 transition-all flex flex-col cursor-pointer"
            >
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#241C18]">
                <SacredImage
                  src={deity.image}
                  alt={deity.name}
                  fallbackTitle={deity.name}
                  className="w-full h-full object-cover group-hover:scale-[1.03] transition-transform duration-300"
                />
              </div>

              <div className="p-4 sm:p-5 flex-1 flex flex-col justify-between">
                <div>
                  <div className="flex items-baseline justify-between gap-2">
                    <h3 className="font-display text-xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                      {deity.name}
                    </h3>
                    <span className="text-xs text-[#7C1D26] dark:text-[#E5B869] font-medium">
                      {deity.tamilName}
                    </span>
                  </div>
                  <p className="mt-1 text-xs text-[#695F57] dark:text-[#B5AAA0]">
                    {deity.epithet}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-[#EFEAE2] dark:border-[#2C2621] flex items-center justify-between text-xs text-[#7D7268] dark:text-[#968B80]">
                  <span className="truncate">
                    {deity.id === 'ayyappa'
                      ? `${deity.hymns.length} Hymns · 108 Saranam`
                      : `${deity.hymns.length} Parayanams · ${deity.sacredDay.split('·')[0].trim()}`}
                  </span>
                  <Sparkles className="w-3.5 h-3.5 text-[#B47B2B] dark:text-[#E5B869] shrink-0" />
                </div>
              </div>
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};
