let audioCtx: AudioContext | null = null;

export function playTempleBell(milestone = false) {
  try {
    const AudioContextClass =
      window.AudioContext ||
      (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
    if (!AudioContextClass) return;

    if (!audioCtx) {
      audioCtx = new AudioContextClass();
    }
    if (audioCtx.state === 'suspended') {
      void audioCtx.resume();
    }

    const now = audioCtx.currentTime;
    const baseFreq = milestone ? 660 : 528;
    const partials = milestone ? [1, 2.02, 3.04] : [1, 2.01];

    partials.forEach((ratio, idx) => {
      if (!audioCtx) return;
      const osc = audioCtx.createOscillator();
      const gain = audioCtx.createGain();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseFreq * ratio, now);

      const peak = idx === 0 ? (milestone ? 0.12 : 0.06) : 0.03;
      gain.gain.setValueAtTime(0.0001, now);
      gain.gain.exponentialRampToValueAtTime(peak, now + 0.015);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + (milestone ? 1.4 : 0.65));

      osc.connect(gain);
      gain.connect(audioCtx.destination);
      osc.start(now);
      osc.stop(now + (milestone ? 1.45 : 0.7));
    });
  } catch {
    // Audio playback safely ignored if unavailable
  }
}
