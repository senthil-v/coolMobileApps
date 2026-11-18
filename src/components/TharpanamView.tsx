import React, { useMemo, useState } from 'react';
import {
  Calendar,
  Check,
  ChevronRight,
  Copy,
  Edit3,
  RotateCcw,
} from 'lucide-react';
import { THARPANAM_RITUAL_IMAGE } from '../data/deitiesData';
import {
  AMAVASAI_DATES,
  buildSankalpamText,
  buildTharpanaMantras,
  GANESHA_MANTRA,
  GAYATRI_MANTRA,
  LineageProfile,
  OORJAM_VAHANTHEE,
} from '../data/tharpanamData';
import { playTempleBell } from '../utils/chime';
import { SacredImage } from './SacredImage';

interface TharpanamViewProps {
  lineage: LineageProfile;
  onEditLineage: () => void;
}

type YearFilter = 'upcoming' | '2026' | '2027';

export const TharpanamView: React.FC<TharpanamViewProps> = ({
  lineage,
  onEditLineage,
}) => {
  const now = new Date();
  const todayIso = `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')}`;
  const initialUpcomingId =
    AMAVASAI_DATES.find((d) => d.isoDate >= todayIso)?.id || '2026-12-08';

  const [yearFilter, setYearFilter] = useState<YearFilter>('upcoming');
  const [selectedDateId, setSelectedDateId] = useState<string>(initialUpcomingId);
  const [gayatriCount, setGayatriCount] = useState<number>(0);
  const [offeringCounts, setOfferingCounts] = useState<Record<string, number>>({});
  const [copiedFull, setCopiedFull] = useState<boolean>(false);

  const visibleDates = useMemo(() => {
    if (yearFilter === '2026') {
      return AMAVASAI_DATES.filter((d) => d.year === 2026);
    }
    if (yearFilter === '2027') {
      return AMAVASAI_DATES.filter((d) => d.year === 2027);
    }
    return AMAVASAI_DATES.filter((d) => d.isoDate >= todayIso);
  }, [yearFilter]);

  const activeDate = useMemo(
    () => AMAVASAI_DATES.find((d) => d.id === selectedDateId) || visibleDates[0] || AMAVASAI_DATES[1],
    [selectedDateId, visibleDates]
  );

  const sankalpam = useMemo(
    () => buildSankalpamText(activeDate, lineage),
    [activeDate, lineage]
  );

  const generatedMantras = useMemo(
    () => buildTharpanaMantras(lineage),
    [lineage]
  );

  const paternalMaleMantras = generatedMantras.filter(
    (m) => m.side === 'Paternal' && m.gender === 'Male'
  );
  const paternalFemaleMantras = generatedMantras.filter(
    (m) => m.side === 'Paternal' && m.gender === 'Female'
  );
  const maternalMaleMantras = generatedMantras.filter(
    (m) => m.side === 'Maternal' && m.gender === 'Male'
  );
  const maternalFemaleMantras = generatedMantras.filter(
    (m) => m.side === 'Maternal' && m.gender === 'Female'
  );

  const incrementOffering = (id: string) => {
    setOfferingCounts((prev) => {
      const current = prev[id] ?? 0;
      const next = current >= 3 ? 0 : current + 1;
      if (next === 3) playTempleBell(false);
      return { ...prev, [id]: next };
    });
  };

  const handleCopyFullRitual = () => {
    const lines = [
      `AMAVASAI THARPANAM — ${activeDate.displayDate} (${activeDate.weekday})`,
      `${activeDate.samvatsara} | ${activeDate.masaTamil} (${activeDate.masaSanskrit}) | ${activeDate.nakshatraTamil}`,
      '',
      '1. GANESHA MANTRA (Upaviti — Sacred thread on left shoulder)',
      GANESHA_MANTRA.shlokaEnglish,
      '',
      '2. GAYATRI MANTRA & PRANAYAMAM',
      GAYATRI_MANTRA.pranayamaEnglish,
      '',
      '3. SANKALPAM (Shift to Prachinaviti — Sacred thread on right shoulder)',
      sankalpam.openingCosmic,
      sankalpam.panchangamLine,
      sankalpam.paternalMaleClause,
      sankalpam.paternalFemaleClause,
      sankalpam.maternalMaleClause,
      sankalpam.maternalFemaleClause,
      sankalpam.closingClause,
      '',
      '4. THARPANA MANTRAM BY GENERATION',
      ...generatedMantras.map(
        (m) => `${m.side} ${m.gender} — ${m.relationshipTitle} (${m.divineForm}):\n${m.mantraEnglish}`
      ),
      '',
      '5. CONCLUDING MANTRA (Oorjam Vahanthee)',
      OORJAM_VAHANTHEE.english,
    ];
    void navigator.clipboard?.writeText(lines.join('\n'));
    setCopiedFull(true);
    setTimeout(() => setCopiedFull(false), 2000);
  };

  const renderMantraGroup = (title: string, items: typeof generatedMantras) => (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">{title}</h4>
      <div className="space-y-3">
        {items.map((item) => {
          const count = offeringCounts[item.id] ?? 0;
          const isComplete = count >= 3;
          return (
            <div
              key={item.id}
              className={`rounded-xl border p-4 transition-colors ${
                !item.isDeceased
                  ? 'border-[#EFEAE2] dark:border-[#2C2621] bg-[#FAF8F5]/60 dark:bg-[#14110F]/60 opacity-75'
                  : isComplete
                  ? 'border-emerald-600/35 bg-emerald-50/40 dark:bg-emerald-950/20'
                  : 'border-[#E7E1D8] dark:border-[#302924] bg-[#FAF8F5] dark:bg-[#14110F]'
              }`}
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <div className="text-xs text-[#695F57] dark:text-[#B5AAA0]">
                  <span className="font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
                    {item.relationshipTitle}
                  </span>
                  <span aria-hidden="true"> · </span>
                  <span>{item.divineForm}</span>
                </div>

                {item.isDeceased && (
                  <button
                    type="button"
                    onClick={() => incrementOffering(item.id)}
                    className={`min-h-[40px] px-3.5 py-1.5 rounded-lg text-xs font-mono-nums font-semibold transition-colors cursor-pointer whitespace-nowrap ${
                      isComplete
                        ? 'bg-emerald-700 text-white'
                        : 'bg-white dark:bg-[#1E1A17] border border-[#DFD7CC] dark:border-[#362E29] text-[#7C1D26] dark:text-[#E5B869]'
                    }`}
                  >
                    {isComplete ? '3 / 3 Offered' : `Til Offering: ${count} / 3`}
                  </button>
                )}
              </div>

              <p className="mt-2.5 text-sm sm:text-base font-medium text-[#1F1A17] dark:text-[#F5EFE6] leading-relaxed">
                {item.mantraEnglish}
              </p>
              {item.mantraNote && (
                <p className="mt-1 text-xs text-[#7D7268] dark:text-[#968B80]">{item.mantraNote}</p>
              )}
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="space-y-6 pb-20">
      {/* Ritual Hero Header */}
      <section className="relative overflow-hidden rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-[#1C1613]">
        <div className="relative h-48 sm:h-56 w-full">
          <SacredImage
            src={THARPANAM_RITUAL_IMAGE}
            alt="Copper Panchapatra, black sesame seeds, and darbha koorcham on riverside stone steps"
            fallbackTitle="Amavasai Tharpanam"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/45 to-black/15" />
        </div>
        <div className="absolute inset-0 flex flex-col justify-end p-5 sm:p-7">
          <p className="text-xs font-medium text-[#F3D192]">
            2026–2027 Panchangam · Ubhaya Vamsa Pitru Tharpanam
          </p>
          <div className="mt-1 flex flex-wrap items-end justify-between gap-3">
            <h1 className="font-display text-3xl sm:text-4xl font-semibold text-white">
              Amavasai Tharpanam Guide
            </h1>
            <button
              type="button"
              onClick={handleCopyFullRitual}
              className="inline-flex items-center gap-1.5 min-h-[40px] px-4 py-2 rounded-xl bg-white/15 backdrop-blur-md border border-white/25 text-xs font-semibold text-white hover:bg-white/25 cursor-pointer whitespace-nowrap"
            >
              {copiedFull ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
              <span>{copiedFull ? 'Copied Full Ritual' : 'Copy Full Ritual'}</span>
            </button>
          </div>
        </div>
      </section>

      {/* Lineage Prompt Banner if Names Missing */}
      {sankalpam.hasMissingNames && (
        <div className="rounded-2xl border border-[#B47B2B]/40 bg-[#FDF6E9] dark:bg-[#2A2013] p-4 sm:p-5 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <p className="text-sm font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              Personalize with your 3-Generation Family Names
            </p>
            <p className="mt-0.5 text-xs text-[#695F57] dark:text-[#D1C7BC]">
              Enter your Paternal &amp; Maternal Gotram and 3 generations (Male &amp; Female) once to auto-fill today&apos;s Sankalpam and all 12 Tharpana Mantras.
            </p>
          </div>
          <button
            type="button"
            onClick={onEditLineage}
            className="inline-flex items-center justify-center gap-1.5 min-h-[44px] px-4 py-2 rounded-xl bg-[#7C1D26] text-white text-xs font-semibold hover:bg-[#64161E] whitespace-nowrap shrink-0 cursor-pointer"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Enter Lineage</span>
          </button>
        </div>
      )}

      {/* Amavasai Calendar Picker: Rest of 2026 + Full Year 2027 */}
      <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div className="flex items-center gap-2">
            <Calendar className="w-4 h-4 text-[#7C1D26] dark:text-[#E5B869]" />
            <h2 className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              Select Amavasai Date (2026–2027)
            </h2>
          </div>

          <div className="inline-flex rounded-xl bg-[#F4EFE8] dark:bg-[#27211C] p-1">
            {(
              [
                { id: 'upcoming', label: 'All Upcoming (14)' },
                { id: '2026', label: '2026' },
                { id: '2027', label: 'Full 2027 (13)' },
              ] as const
            ).map((f) => (
              <button
                key={f.id}
                type="button"
                onClick={() => {
                  setYearFilter(f.id);
                  const first =
                    f.id === '2027'
                      ? AMAVASAI_DATES.find((d) => d.year === 2027)
                      : AMAVASAI_DATES.find((d) => d.isoDate >= todayIso);
                  if (first) setSelectedDateId(first.id);
                }}
                className={`min-h-[36px] px-3 py-1.5 rounded-lg text-xs font-medium whitespace-nowrap cursor-pointer ${
                  yearFilter === f.id
                    ? 'bg-white dark:bg-[#3A312B] text-[#1F1A17] dark:text-[#F5EFE6] shadow-sm'
                    : 'text-[#695F57] dark:text-[#B5AAA0]'
                }`}
              >
                {f.label}
              </button>
            ))}
          </div>
        </div>

        {/* Horizontal Scroller on Mobile, Clean Grid on Desktop */}
        <div className="flex lg:grid lg:grid-cols-4 gap-2.5 overflow-x-auto no-scrollbar pb-1">
          {visibleDates.map((d) => {
            const isSelected = d.id === activeDate.id;
            const isPast = d.isoDate < todayIso;
            return (
              <button
                key={d.id}
                type="button"
                onClick={() => setSelectedDateId(d.id)}
                className={`text-left min-w-[205px] lg:min-w-0 rounded-xl border p-3.5 transition-all cursor-pointer shrink-0 ${
                  isSelected
                    ? 'border-[#7C1D26] bg-[#7C1D26] text-white'
                    : 'border-[#E7E1D8] dark:border-[#302924] bg-[#FAF8F5] dark:bg-[#14110F] hover:border-[#7C1D26]/40'
                }`}
              >
                <div className="flex items-center justify-between gap-2 text-xs">
                  <span
                    className={`font-mono-nums font-semibold ${
                      isSelected ? 'text-[#F3D192]' : 'text-[#7C1D26] dark:text-[#E5B869]'
                    }`}
                  >
                    {d.tamilDay}
                  </span>
                  <span className={isSelected ? 'text-white/80' : 'text-[#7D7268] dark:text-[#968B80]'}>
                    {d.weekday.slice(0, 3)}
                  </span>
                </div>
                <p
                  className={`mt-1 text-sm font-semibold ${
                    isSelected ? 'text-white' : 'text-[#1F1A17] dark:text-[#F5EFE6]'
                  }`}
                >
                  {d.displayDate}
                </p>
                <p
                  className={`mt-0.5 text-xs truncate ${
                    isSelected ? 'text-white/85' : 'text-[#695F57] dark:text-[#B5AAA0]'
                  }`}
                >
                  {d.specialObservance || `${d.nakshatraTamil} · ${isPast ? 'Past' : d.year}`}
                </p>
              </button>
            );
          })}
        </div>

        {/* Selected Day Panchangam Strip */}
        <div className="rounded-xl bg-[#FAF8F5] dark:bg-[#14110F] border border-[#EFEAE2] dark:border-[#2C2621] p-4 grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs">
          <div>
            <span className="text-[#7D7268] dark:text-[#968B80]">Samvatsara</span>
            <p className="mt-0.5 font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              {activeDate.samvatsara.replace(' Nāma Saṁvatsare', '')}
            </p>
          </div>
          <div>
            <span className="text-[#7D7268] dark:text-[#968B80]">Ayana &amp; Ritu</span>
            <p className="mt-0.5 font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              {activeDate.ayana.replace('e', 'a')} · {activeDate.ritu.replace(' Ṛtau', '')}
            </p>
          </div>
          <div>
            <span className="text-[#7D7268] dark:text-[#968B80]">Masa</span>
            <p className="mt-0.5 font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              {activeDate.masaTamil} ({activeDate.masaSanskrit.replace(' Māse', '')})
            </p>
          </div>
          <div>
            <span className="text-[#7D7268] dark:text-[#968B80]">Nakshatram</span>
            <p className="mt-0.5 font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              {activeDate.nakshatraTamil} ({activeDate.nakshatra})
            </p>
          </div>
        </div>
      </section>

      {/* Step 1: Ganesha Mantra */}
      <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
            01. {GANESHA_MANTRA.title}
          </h3>
          <span className="text-xs font-medium text-[#7C1D26] dark:text-[#E5B869]">
            Upavīti (Left Shoulder)
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#695F57] dark:text-[#B5AAA0]">
          {GANESHA_MANTRA.instruction}
        </p>
        <div className="rounded-xl bg-[#FAF8F5] dark:bg-[#14110F] border border-[#EFEAE2] dark:border-[#2C2621] p-4 space-y-3">
          <p className="whitespace-pre-line text-sm sm:text-base font-medium text-[#1F1A17] dark:text-[#F5EFE6] leading-relaxed">
            {GANESHA_MANTRA.shlokaEnglish}
          </p>
          <p className="whitespace-pre-line text-sm text-[#4A413A] dark:text-[#D1C7BC] leading-relaxed pt-3 border-t border-[#EFEAE2] dark:border-[#2C2621]">
            {GANESHA_MANTRA.shlokaTamil}
          </p>
        </div>
      </section>

      {/* Step 2: Gayatri Mantra */}
      <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              02. {GAYATRI_MANTRA.title}
            </h3>
            <p className="text-xs sm:text-sm text-[#695F57] dark:text-[#B5AAA0] mt-0.5">
              {GAYATRI_MANTRA.instruction}
            </p>
          </div>
          <div className="flex items-center gap-2">
            <button
              type="button"
              onClick={() => setGayatriCount(0)}
              aria-label="Reset Gayatri Japam count"
              className="min-h-[40px] min-w-[40px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] flex items-center justify-center text-[#695F57] cursor-pointer"
            >
              <RotateCcw className="w-4 h-4" />
            </button>
            <button
              type="button"
              onClick={() => {
                const next = gayatriCount + 1;
                setGayatriCount(next);
                if (next === 10 || next === 28 || next === 108) playTempleBell(true);
              }}
              className="min-h-[44px] px-4 py-2 rounded-xl bg-[#7C1D26] text-white text-xs font-mono-nums font-semibold hover:bg-[#64161E] active:scale-[0.98] transition-all cursor-pointer whitespace-nowrap"
            >
              Tap Gayatri Japam: {gayatriCount}
            </button>
          </div>
        </div>

        <div className="rounded-xl bg-[#FAF8F5] dark:bg-[#14110F] border border-[#EFEAE2] dark:border-[#2C2621] p-4 space-y-3">
          <div>
            <p className="text-xs font-semibold text-[#7C1D26] dark:text-[#E5B869] mb-1">
              Pranayamam
            </p>
            <p className="whitespace-pre-line text-sm text-[#4A413A] dark:text-[#D1C7BC] leading-relaxed">
              {GAYATRI_MANTRA.pranayamaEnglish}
            </p>
          </div>
          <div className="pt-3 border-t border-[#EFEAE2] dark:border-[#2C2621]">
            <p className="text-xs font-semibold text-[#7C1D26] dark:text-[#E5B869] mb-1">
              Gayatri Mahamantram
            </p>
            <p className="whitespace-pre-line text-base font-semibold text-[#1F1A17] dark:text-[#F5EFE6] leading-relaxed">
              {GAYATRI_MANTRA.gayatriEnglish}
            </p>
            <p className="whitespace-pre-line text-sm text-[#4A413A] dark:text-[#D1C7BC] leading-relaxed mt-2">
              {GAYATRI_MANTRA.gayatriTamil}
            </p>
          </div>
        </div>
      </section>

      {/* Step 3: Sankalpam for Selected Amavasai Day */}
      <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-4">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              03. Sankalpam for {activeDate.displayDate}
            </h3>
            <p className="text-xs sm:text-sm text-[#695F57] dark:text-[#B5AAA0] mt-0.5">
              Shift sacred thread to right shoulder (Prācīnāvīti), hold darbha &amp; black sesame with water.
            </p>
          </div>
          <button
            type="button"
            onClick={onEditLineage}
            className="inline-flex items-center gap-1.5 min-h-[40px] px-3.5 py-2 rounded-xl border border-[#DFD7CC] dark:border-[#362E29] text-xs font-medium text-[#1F1A17] dark:text-[#F5EFE6] hover:bg-[#FAF8F5] dark:hover:bg-[#14110F] cursor-pointer whitespace-nowrap"
          >
            <Edit3 className="w-3.5 h-3.5" />
            <span>Edit Ancestor Names</span>
          </button>
        </div>

        <div className="rounded-xl bg-[#FAF8F5] dark:bg-[#14110F] border border-[#EFEAE2] dark:border-[#2C2621] p-4 sm:p-5 space-y-3 text-sm sm:text-base leading-relaxed text-[#1F1A17] dark:text-[#F5EFE6]">
          <p className="text-[#695F57] dark:text-[#B5AAA0]">{sankalpam.openingCosmic}</p>
          <p className="font-semibold text-[#7C1D26] dark:text-[#E5B869]">
            {sankalpam.panchangamLine}
          </p>
          <div className="space-y-2 pt-2 border-t border-[#EFEAE2] dark:border-[#2C2621]">
            <p>{sankalpam.paternalMaleClause}</p>
            <p>{sankalpam.paternalFemaleClause}</p>
            <p>{sankalpam.maternalMaleClause}</p>
            <p>{sankalpam.maternalFemaleClause}</p>
          </div>
          <p className="font-semibold pt-2 border-t border-[#EFEAE2] dark:border-[#2C2621]">
            {sankalpam.closingClause}
          </p>
        </div>
      </section>

      {/* Step 4: Generation-by-Generation Tharpana Mantram */}
      <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-6">
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              04. Tharpana Mantram by Generation
            </h3>
            <p className="text-xs sm:text-sm text-[#695F57] dark:text-[#B5AAA0] mt-0.5">
              Offer sesame-mixed water (Tila Tharpanam) 3 times per departed ancestor over the darbha koorcham.
            </p>
          </div>
          <button
            type="button"
            onClick={() => setOfferingCounts({})}
            className="inline-flex items-center gap-1.5 min-h-[40px] px-3 py-1.5 rounded-xl border border-[#DFD7CC] dark:border-[#362E29] text-xs font-medium text-[#695F57] dark:text-[#B5AAA0] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Reset Ticks</span>
          </button>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <div className="space-y-6">
            {renderMantraGroup('Paternal Male (3 Generations)', paternalMaleMantras)}
            {renderMantraGroup('Paternal Female (3 Generations)', paternalFemaleMantras)}
          </div>
          <div className="space-y-6">
            {renderMantraGroup('Maternal Male (3 Generations)', maternalMaleMantras)}
            {renderMantraGroup('Maternal Female (3 Generations)', maternalFemaleMantras)}
          </div>
        </div>
      </section>

      {/* Step 5: Concluding Mantra */}
      <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-3">
        <div className="flex items-center justify-between gap-2">
          <h3 className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
            05. {OORJAM_VAHANTHEE.title}
          </h3>
          <span className="text-xs font-medium text-[#7C1D26] dark:text-[#E5B869]">
            Return to Upavīti
          </span>
        </div>
        <p className="text-xs sm:text-sm text-[#695F57] dark:text-[#B5AAA0]">
          {OORJAM_VAHANTHEE.instruction}
        </p>
        <div className="rounded-xl bg-[#FAF8F5] dark:bg-[#14110F] border border-[#EFEAE2] dark:border-[#2C2621] p-4 space-y-2.5">
          <p className="text-base font-semibold text-[#1F1A17] dark:text-[#F5EFE6] leading-relaxed">
            {OORJAM_VAHANTHEE.english}
          </p>
          <p className="text-sm text-[#4A413A] dark:text-[#D1C7BC] leading-relaxed">
            {OORJAM_VAHANTHEE.tamil}
          </p>
          <p className="text-xs text-[#695F57] dark:text-[#9E9286] pt-2 border-t border-[#EFEAE2] dark:border-[#2C2621]">
            {OORJAM_VAHANTHEE.meaning}
          </p>
        </div>

        <div className="pt-2 flex justify-end">
          <button
            type="button"
            onClick={onEditLineage}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-4 py-2 rounded-xl text-xs font-semibold text-[#7C1D26] dark:text-[#E5B869] hover:underline cursor-pointer"
          >
            <span>Review Stored Family Lineage</span>
            <ChevronRight className="w-4 h-4" />
          </button>
        </div>
      </section>
    </div>
  );
};
