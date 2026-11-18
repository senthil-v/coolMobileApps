import React, { useRef, useState } from 'react';
import { Check, Download, RotateCcw, Upload, Users } from 'lucide-react';
import {
  AncestorEntry,
  DEFAULT_LINEAGE_PROFILE,
  LineageProfile,
} from '../data/tharpanamData';

interface LineageViewProps {
  lineage: LineageProfile;
  onSaveLineage: (next: LineageProfile) => void;
  onGoToTharpanam: () => void;
}

const PATERNAL_MALE_ROLES = [
  'Gen 1 · Father (Pitā · Vasu Rūpa)',
  'Gen 2 · Paternal Grandfather (Pitāmaha · Rudra Rūpa)',
  'Gen 3 · Paternal Great-Grandfather (Prapitāmaha · Āditya Rūpa)',
];

const PATERNAL_FEMALE_ROLES = [
  'Gen 1 · Mother (Mātā · Vasu Rūpa)',
  'Gen 2 · Paternal Grandmother (Pitāmahī · Rudra Rūpa)',
  'Gen 3 · Paternal Great-Grandmother (Prapitāmahī · Āditya Rūpa)',
];

const MATERNAL_MALE_ROLES = [
  'Gen 1 · Maternal Grandfather (Mātāmaha · Vasu Rūpa)',
  'Gen 2 · Maternal Great-Grandfather (Mātṛ-Pitāmaha · Rudra Rūpa)',
  'Gen 3 · Maternal Great-Great-Grandfather (Mātṛ-Prapitāmaha · Āditya Rūpa)',
];

const MATERNAL_FEMALE_ROLES = [
  'Gen 1 · Maternal Grandmother (Mātāmahī · Vasu Rūpa)',
  'Gen 2 · Maternal Great-Grandmother (Mātṛ-Pitāmahī · Rudra Rūpa)',
  'Gen 3 · Maternal Great-Great-Grandmother (Mātṛ-Prapitāmahī · Āditya Rūpa)',
];

export const LineageView: React.FC<LineageViewProps> = ({
  lineage,
  onSaveLineage,
  onGoToTharpanam,
}) => {
  const [draft, setDraft] = useState<LineageProfile>(lineage);
  const [savedNotice, setSavedNotice] = useState(false);
  const [importError, setImportError] = useState<string | null>(null);
  const fileInputRef = useRef<HTMLInputElement | null>(null);

  const updateAncestor = (
    group: 'paternalMale' | 'paternalFemale' | 'maternalMale' | 'maternalFemale',
    index: 0 | 1 | 2,
    patch: Partial<AncestorEntry>
  ) => {
    setDraft((prev) => {
      const updated = [...prev[group]] as [AncestorEntry, AncestorEntry, AncestorEntry];
      updated[index] = { ...updated[index], ...patch };
      return { ...prev, [group]: updated };
    });
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    const stamped: LineageProfile = {
      ...draft,
      updatedAt: new Date().toISOString(),
    };
    onSaveLineage(stamped);
    setSavedNotice(true);
    setTimeout(() => setSavedNotice(false), 3000);
  };

  const handleExport = () => {
    const blob = new Blob([JSON.stringify(draft, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'sannidhi-family-lineage.json';
    a.click();
    URL.revokeObjectURL(url);
  };

  const handleImportFile = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    setImportError(null);
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(String(reader.result)) as LineageProfile;
        if (
          Array.isArray(parsed.paternalMale) &&
          parsed.paternalMale.length === 3 &&
          Array.isArray(parsed.maternalFemale) &&
          parsed.maternalFemale.length === 3
        ) {
          setDraft(parsed);
          onSaveLineage({ ...parsed, updatedAt: new Date().toISOString() });
          setSavedNotice(true);
          setTimeout(() => setSavedNotice(false), 3000);
        } else {
          setImportError('Invalid lineage JSON structure.');
        }
      } catch {
        setImportError('Could not read the selected JSON file.');
      }
    };
    reader.readAsText(file);
  };

  const renderAncestorGroup = (
    title: string,
    roles: string[],
    groupKey: 'paternalMale' | 'paternalFemale' | 'maternalMale' | 'maternalFemale',
    placeholderPrefix: string
  ) => (
    <div className="space-y-3">
      <h4 className="text-sm font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">{title}</h4>
      <div className="space-y-3">
        {([0, 1, 2] as const).map((idx) => {
          const entry = draft[groupKey][idx];
          return (
            <div
              key={`${groupKey}-${idx}`}
              className="rounded-xl border border-[#E7E1D8] dark:border-[#302924] bg-[#FAF8F5] dark:bg-[#14110F] p-3.5 space-y-2.5"
            >
              <div className="flex flex-wrap items-center justify-between gap-2">
                <label
                  htmlFor={`${groupKey}-${idx}`}
                  className="text-xs font-medium text-[#695F57] dark:text-[#B5AAA0]"
                >
                  {roles[idx]}
                </label>
                <div className="inline-flex rounded-lg bg-[#EAE2D7]/70 dark:bg-[#27211C] p-0.5">
                  <button
                    type="button"
                    onClick={() => updateAncestor(groupKey, idx, { deceased: true })}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer ${
                      entry.deceased
                        ? 'bg-white dark:bg-[#3A312B] text-[#7C1D26] dark:text-[#E5B869] shadow-sm'
                        : 'text-[#695F57] dark:text-[#968B80]'
                    }`}
                  >
                    Departed
                  </button>
                  <button
                    type="button"
                    onClick={() => updateAncestor(groupKey, idx, { deceased: false })}
                    className={`px-2.5 py-1 text-[11px] font-medium rounded-md transition-colors cursor-pointer ${
                      !entry.deceased
                        ? 'bg-white dark:bg-[#3A312B] text-[#1F1A17] dark:text-[#F5EFE6] shadow-sm'
                        : 'text-[#695F57] dark:text-[#968B80]'
                    }`}
                  >
                    Living (Skip)
                  </button>
                </div>
              </div>
              <input
                id={`${groupKey}-${idx}`}
                type="text"
                value={entry.name}
                disabled={!entry.deceased}
                onChange={(e) => updateAncestor(groupKey, idx, { name: e.target.value })}
                placeholder={
                  entry.deceased
                    ? `Enter ${placeholderPrefix} name (e.g., Sri Subramanya)`
                    : 'Marked living — omitted from Tharpanam'
                }
                className="w-full min-h-[44px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-white dark:bg-[#1C1815] px-3.5 py-2 text-sm text-[#1F1A17] dark:text-[#F5EFE6] placeholder:text-[#9E9286] focus:outline-none focus:ring-2 focus:ring-[#7C1D26]/40 disabled:opacity-50"
              />
            </div>
          );
        })}
      </div>
    </div>
  );

  return (
    <form onSubmit={handleSave} className="space-y-6 pb-20">
      <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
        <div>
          <h1 className="font-display text-3xl sm:text-4xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
            Ancestral Lineage (3 Generations)
          </h1>
          <p className="mt-1 text-sm text-[#695F57] dark:text-[#B5AAA0]">
            Stored securely on your device to personalize every Amavasai Sankalpam and Tharpana Mantram.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <button
            type="button"
            onClick={handleExport}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-white dark:bg-[#1C1815] text-xs font-medium text-[#1F1A17] dark:text-[#F5EFE6] hover:bg-[#F4EFE8] dark:hover:bg-[#2A2420] cursor-pointer"
          >
            <Download className="w-3.5 h-3.5" />
            <span>Export</span>
          </button>
          <button
            type="button"
            onClick={() => fileInputRef.current?.click()}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-white dark:bg-[#1C1815] text-xs font-medium text-[#1F1A17] dark:text-[#F5EFE6] hover:bg-[#F4EFE8] dark:hover:bg-[#2A2420] cursor-pointer"
          >
            <Upload className="w-3.5 h-3.5" />
            <span>Import</span>
          </button>
          <input
            ref={fileInputRef}
            type="file"
            accept="application/json"
            onChange={handleImportFile}
            className="hidden"
          />
          <button
            type="button"
            onClick={() => {
              setDraft(DEFAULT_LINEAGE_PROFILE);
              onSaveLineage(DEFAULT_LINEAGE_PROFILE);
            }}
            className="inline-flex items-center gap-1.5 min-h-[44px] px-3.5 py-2 rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-white dark:bg-[#1C1815] text-xs font-medium text-[#695F57] dark:text-[#B5AAA0] hover:text-[#7C1D26] cursor-pointer"
          >
            <RotateCcw className="w-3.5 h-3.5" />
            <span>Clear</span>
          </button>
        </div>
      </div>

      {importError && (
        <div className="rounded-xl border border-red-300 bg-red-50 dark:bg-red-950/40 dark:border-red-800 px-4 py-3 text-xs text-red-700 dark:text-red-300">
          {importError}
        </div>
      )}

      {/* Performer & Veda Tradition */}
      <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-4">
        <div className="flex items-center gap-2">
          <Users className="w-4 h-4 text-[#7C1D26] dark:text-[#E5B869]" />
          <h2 className="font-display text-xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
            Performer &amp; Veda Tradition
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div>
            <label
              htmlFor="karta-name"
              className="block text-xs font-medium text-[#695F57] dark:text-[#B5AAA0] mb-1.5"
            >
              Performer (Karta) Name
            </label>
            <input
              id="karta-name"
              type="text"
              value={draft.kartaName}
              onChange={(e) => setDraft((p) => ({ ...p, kartaName: e.target.value }))}
              placeholder="Optional (e.g., Sundaram)"
              className="w-full min-h-[44px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] px-3.5 py-2 text-sm text-[#1F1A17] dark:text-[#F5EFE6]"
            />
          </div>

          <div>
            <label
              htmlFor="veda-select"
              className="block text-xs font-medium text-[#695F57] dark:text-[#B5AAA0] mb-1.5"
            >
              Veda / Sutra
            </label>
            <select
              id="veda-select"
              value={draft.vedaTradition}
              onChange={(e) =>
                setDraft((p) => ({
                  ...p,
                  vedaTradition: e.target.value as LineageProfile['vedaTradition'],
                }))
              }
              className="w-full min-h-[44px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] px-3.5 py-2 text-sm text-[#1F1A17] dark:text-[#F5EFE6]"
            >
              <option value="Yajurveda">Yajurveda (Apastamba / Bodhayana)</option>
              <option value="Rigveda">Rigveda (Ashvalayana)</option>
              <option value="Samaveda">Samaveda (Drahyayana)</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="male-suffix"
              className="block text-xs font-medium text-[#695F57] dark:text-[#B5AAA0] mb-1.5"
            >
              Male Name Suffix
            </label>
            <select
              id="male-suffix"
              value={draft.maleSuffix}
              onChange={(e) =>
                setDraft((p) => ({
                  ...p,
                  maleSuffix: e.target.value as LineageProfile['maleSuffix'],
                }))
              }
              className="w-full min-h-[44px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] px-3.5 py-2 text-sm text-[#1F1A17] dark:text-[#F5EFE6]"
            >
              <option value="Śarmaṇaḥ">Śarmaṇaḥ</option>
              <option value="Varmaṇaḥ">Varmaṇaḥ</option>
              <option value="Guptasya">Guptasya</option>
              <option value="Dāsasya">Dāsasya</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="female-suffix"
              className="block text-xs font-medium text-[#695F57] dark:text-[#B5AAA0] mb-1.5"
            >
              Female Name Suffix
            </label>
            <select
              id="female-suffix"
              value={draft.femaleSuffix}
              onChange={(e) =>
                setDraft((p) => ({
                  ...p,
                  femaleSuffix: e.target.value as LineageProfile['femaleSuffix'],
                }))
              }
              className="w-full min-h-[44px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] px-3.5 py-2 text-sm text-[#1F1A17] dark:text-[#F5EFE6]"
            >
              <option value="Nāmnīm">Nāmnīm</option>
              <option value="Devī Nāmnīm">Devī Nāmnīm</option>
              <option value="Dāsyāḥ">Dāsyāḥ</option>
            </select>
          </div>
        </div>
      </section>

      {/* Paternal & Maternal 2-Column Split on Desktop */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Paternal Side */}
        <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-5">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              Paternal Lineage (Pitru Varga)
            </h3>
            <p className="text-xs text-[#695F57] dark:text-[#B5AAA0] mt-0.5">
              Father&apos;s side — 3 generations male &amp; 3 generations female
            </p>
          </div>

          <div>
            <label
              htmlFor="paternal-gotram"
              className="block text-xs font-medium text-[#695F57] dark:text-[#B5AAA0] mb-1.5"
            >
              Paternal Gotram
            </label>
            <input
              id="paternal-gotram"
              type="text"
              value={draft.paternalGotram}
              onChange={(e) => setDraft((p) => ({ ...p, paternalGotram: e.target.value }))}
              placeholder="e.g., Bharadwaja, Kashyapa, Kaundinya, Vasishta"
              className="w-full min-h-[44px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] px-3.5 py-2 text-sm text-[#1F1A17] dark:text-[#F5EFE6]"
            />
          </div>

          {renderAncestorGroup('Paternal Male (3 Generations)', PATERNAL_MALE_ROLES, 'paternalMale', 'ancestor')}
          {renderAncestorGroup('Paternal Female (3 Generations)', PATERNAL_FEMALE_ROLES, 'paternalFemale', 'ancestor')}
        </section>

        {/* Maternal Side */}
        <section className="rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-5 sm:p-6 space-y-5">
          <div>
            <h3 className="font-display text-2xl font-semibold text-[#1F1A17] dark:text-[#F5EFE6]">
              Maternal Lineage (Matamaha Varga)
            </h3>
            <p className="text-xs text-[#695F57] dark:text-[#B5AAA0] mt-0.5">
              Mother&apos;s side — 3 generations male &amp; 3 generations female
            </p>
          </div>

          <div>
            <label
              htmlFor="maternal-gotram"
              className="block text-xs font-medium text-[#695F57] dark:text-[#B5AAA0] mb-1.5"
            >
              Maternal Grandfather&apos;s Gotram
            </label>
            <input
              id="maternal-gotram"
              type="text"
              value={draft.maternalGotram}
              onChange={(e) => setDraft((p) => ({ ...p, maternalGotram: e.target.value }))}
              placeholder="e.g., Harita, Atreya, Srivatsa"
              className="w-full min-h-[44px] rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] px-3.5 py-2 text-sm text-[#1F1A17] dark:text-[#F5EFE6]"
            />
          </div>

          {renderAncestorGroup('Maternal Male (3 Generations)', MATERNAL_MALE_ROLES, 'maternalMale', 'maternal ancestor')}
          {renderAncestorGroup('Maternal Female (3 Generations)', MATERNAL_FEMALE_ROLES, 'maternalFemale', 'maternal ancestor')}
        </section>
      </div>

      {/* Save Action Bar */}
      <div className="flex flex-wrap items-center justify-between gap-4 rounded-2xl border border-[#E7E1D8] dark:border-[#302924] bg-white dark:bg-[#1C1815] p-4 sm:p-5">
        <div className="text-xs text-[#695F57] dark:text-[#B5AAA0]">
          {savedNotice ? (
            <span className="inline-flex items-center gap-1.5 font-semibold text-emerald-700 dark:text-emerald-400">
              <Check className="w-4 h-4" />
              Family lineage saved locally on this device.
            </span>
          ) : (
            <span>Changes are stored locally in your browser/app storage for offline rituals.</span>
          )}
        </div>

        <div className="flex flex-wrap items-center gap-3 w-full sm:w-auto">
          <button
            type="submit"
            className="flex-1 sm:flex-none inline-flex items-center justify-center gap-2 min-h-[48px] px-6 py-2.5 rounded-xl bg-[#7C1D26] text-white text-sm font-semibold hover:bg-[#64161E] active:scale-[0.98] transition-all whitespace-nowrap cursor-pointer"
          >
            <Check className="w-4 h-4" />
            <span>Save Family Lineage</span>
          </button>
          <button
            type="button"
            onClick={() => {
              onSaveLineage({ ...draft, updatedAt: new Date().toISOString() });
              onGoToTharpanam();
            }}
            className="flex-1 sm:flex-none inline-flex items-center justify-center min-h-[48px] px-5 py-2.5 rounded-xl border border-[#DFD7CC] dark:border-[#362E29] bg-[#FAF8F5] dark:bg-[#14110F] text-sm font-medium text-[#1F1A17] dark:text-[#F5EFE6] hover:bg-[#EFEAE2] dark:hover:bg-[#2A2420] whitespace-nowrap cursor-pointer"
          >
            View Sankalpam &amp; Mantras
          </button>
        </div>
      </div>
    </form>
  );
};
