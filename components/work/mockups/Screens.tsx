/* Hand-built product mockups. Each is replaced automatically the moment a
   real screenshot is dropped into public/images/projects/. */

const tiles = [
  { label: "Puja\nBooking", glyph: "◈" },
  { label: "Puja\nSamagri", glyph: "❖" },
  { label: "Panchang", glyph: "☼" },
  { label: "More", glyph: "⋯" },
];

export function ShastriJiScreen() {
  return (
    <div className="flex h-full flex-col bg-[#faf7f1] px-2.5 pb-2.5 pt-4">
      <div className="flex items-center justify-between font-mono text-[5px] text-ink-2">
        <span>9:41</span>
        <span>▮▮▮</span>
      </div>

      <div className="mt-2 flex items-center gap-1.5">
        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full bg-copper/20 text-[6px] text-copper">
          ॐ
        </span>
        <span className="font-display text-[9px] font-extrabold leading-none">Shastri Ji</span>
      </div>

      <p className="mt-2 font-display text-[8.5px] font-bold leading-[1.3]">
        Find Trusted Pandits
        <br />
        For Every Occasion
      </p>

      <div className="mt-1.5 rounded-sm border border-ink/15 bg-white px-1.5 py-[3px] font-mono text-[5px] text-olive">
        Search puja, samagri…
      </div>

      <div className="mt-2.5 grid grid-cols-4 gap-1">
        {tiles.map((tile) => (
          <div key={tile.label} className="flex flex-col items-center gap-[3px]">
            <span className="grid h-6 w-6 place-items-center rounded-full border border-copper/30 bg-copper/10 text-[7px] text-copper">
              {tile.glyph}
            </span>
            <span className="whitespace-pre text-center font-mono text-[4.5px] leading-[1.25] text-ink-2">
              {tile.label}
            </span>
          </div>
        ))}
      </div>

      <div className="mt-2.5 rounded-sm border border-ink/12 bg-white p-1.5">
        <div className="flex items-center justify-between">
          <span className="font-mono text-[5px] font-medium text-ink">Today&rsquo;s Panchang</span>
          <span className="font-mono text-[4.5px] text-copper">View</span>
        </div>
        <div className="mt-1 space-y-[3px]">
          {["Tithi · Shukla Paksha", "Nakshatra · Rohini"].map((row) => (
            <div key={row} className="flex items-center gap-1">
              <span className="h-[3px] w-[3px] rounded-full bg-copper/50" />
              <span className="font-mono text-[4.5px] text-olive">{row}</span>
            </div>
          ))}
        </div>
      </div>

      <p className="mt-3 font-mono text-[5px] uppercase tracking-[0.14em] text-olive">
        Popular Pujas
      </p>
      <div className="mt-1 space-y-1">
        {[
          ["Griha Pravesh", "from ₹2,100"],
          ["Satyanarayan Katha", "from ₹1,500"],
          ["Rudrabhishek", "from ₹3,100"],
        ].map(([name, price]) => (
          <div
            key={name}
            className="flex items-center gap-1.5 rounded-sm border border-ink/12 bg-white px-1.5 py-[3px]"
          >
            <span className="h-3 w-3 shrink-0 rounded-sm bg-copper/15" />
            <span className="font-mono text-[5px] text-ink">{name}</span>
            <span className="ml-auto font-mono text-[4.5px] text-olive">{price}</span>
          </div>
        ))}
      </div>

      <div className="mt-auto grid grid-cols-2 gap-1 pt-2">
        <span className="rounded-sm bg-ink py-[4px] text-center font-mono text-[5px] text-paper">
          Book Pandit
        </span>
        <span className="rounded-sm border border-ink/20 py-[4px] text-center font-mono text-[5px] text-ink-2">
          Explore
        </span>
      </div>
    </div>
  );
}

export function YojanaAIScreen() {
  return (
    <div className="relative flex h-full flex-col bg-[#f7f8f5] px-2.5 pb-2.5 pt-4">
      <div className="flex items-center justify-between font-mono text-[5px] text-ink-2">
        <span>9:41</span>
        <span>▮▮▮</span>
      </div>

      <div className="mt-2 flex items-center gap-1.5">
        <span className="grid h-4 w-4 shrink-0 place-items-center rounded-full border border-olive/40 text-[6px] text-olive">
          ◉
        </span>
        <span className="font-display text-[9px] font-extrabold leading-none">YojanaAI</span>
      </div>

      <p className="mt-3 font-display text-[9px] font-bold leading-[1.28]">
        Find the right
        <br />
        government schemes
        <br />
        for a better tomorrow.
      </p>

      <div className="mt-2.5 flex items-center gap-1 rounded-sm border border-ink/18 bg-white px-1.5 py-[4px]">
        <span className="text-[5px] text-olive">⌕</span>
        <span className="font-mono text-[5px] text-olive">Ask about any scheme…</span>
        <span className="ml-auto text-[6px] text-copper">🎙</span>
      </div>

      <div className="mt-1.5 flex gap-1">
        {["हिंदी", "English"].map((lang, i) => (
          <span
            key={lang}
            className={`rounded-full px-1.5 py-[2px] font-mono text-[4.5px] ${
              i === 0 ? "bg-ink text-paper" : "border border-ink/20 text-ink-2"
            }`}
          >
            {lang}
          </span>
        ))}
      </div>

      <div className="mt-2 space-y-1">
        {[
          ["PM Awas Yojana", "Housing · 92% match"],
          ["Ayushman Bharat", "Health · 88% match"],
          ["PM Kisan Nidhi", "Farming · 81% match"],
        ].map(([title, sub]) => (
          <div key={title} className="rounded-sm border border-ink/12 bg-white px-1.5 py-1">
            <p className="font-mono text-[5px] font-medium text-ink">{title}</p>
            <p className="font-mono text-[4.5px] text-olive">{sub}</p>
          </div>
        ))}
      </div>

      <div className="mt-2 rounded-sm border border-olive/25 bg-olive/5 px-1.5 py-1">
        <p className="font-mono text-[4.5px] leading-[1.5] text-ink-2">
          &ldquo;मुझे घर बनाने की योजना चाहिए&rdquo;
        </p>
        <p className="mt-[3px] font-mono text-[4.5px] text-olive">→ 3 schemes matched</p>
      </div>

      <div className="mt-auto flex items-center justify-around border-t border-ink/12 pt-1.5">
        {["Home", "Search", "Saved", "Profile"].map((item, i) => (
          <span
            key={item}
            className={`font-mono text-[4.5px] ${i === 0 ? "text-ink" : "text-olive"}`}
          >
            {item}
          </span>
        ))}
      </div>
    </div>
  );
}

const bars = [42, 58, 35, 72, 50, 88, 64, 95, 70, 82];

export function IcdDashboard() {
  return (
    <div className="flex h-full w-full overflow-hidden rounded-[3px] border border-ink/30 bg-[#1c2021] text-paper shadow-[0_3px_18px_rgba(23,26,26,0.16)]">
      {/* sidebar */}
      <div className="hidden w-[68px] shrink-0 border-r border-white/10 px-2 py-2.5 sm:block">
        <div className="flex items-center gap-1">
          <span className="grid h-3 w-3 place-items-center bg-copper text-[4.5px] text-[#1c2021]">
            IC
          </span>
          <span className="font-mono text-[4.5px] tracking-wide">DEPOT</span>
        </div>
        <div className="mt-2.5 space-y-[5px]">
          {["Dashboard", "Gate Pass", "Billing", "Containers", "Reports"].map((item, i) => (
            <div
              key={item}
              className={`flex items-center gap-1 rounded-[2px] px-1 py-[2px] font-mono text-[4.5px] ${
                i === 0 ? "bg-white/10 text-paper" : "text-paper/45"
              }`}
            >
              <span className="h-[3px] w-[3px] rounded-[1px] bg-current" />
              {item}
            </div>
          ))}
        </div>
      </div>

      {/* main */}
      <div className="flex min-w-0 flex-1 flex-col px-2.5 py-2.5">
        <div className="flex items-center justify-between border-b border-white/10 pb-1.5">
          <span className="font-mono text-[5px] tracking-wide">ICD Container Depot</span>
          <span className="font-mono text-[4.5px] text-paper/45">FY 2026</span>
        </div>

        <div className="mt-2 grid grid-cols-2 gap-1.5">
          {[
            ["1,248", "Total Containers"],
            ["342", "Active Gate Pass"],
          ].map(([value, label]) => (
            <div key={label} className="border border-white/10 px-1.5 py-1">
              <p className="font-display text-[11px] font-extrabold leading-none">{value}</p>
              <p className="mt-[3px] font-mono text-[4.5px] text-paper/45">{label}</p>
            </div>
          ))}
        </div>

        <div className="mt-2 flex min-h-0 flex-1 flex-col border border-white/10 p-1.5">
          <div className="flex items-center justify-between">
            <span className="font-mono text-[4.5px] text-paper/45">BILLING THROUGHPUT</span>
            <span className="font-mono text-[4.5px] text-copper">+95%</span>
          </div>
          <div className="mt-auto flex h-[42px] items-end gap-[3px]">
            {bars.map((height, i) => (
              <span
                key={i}
                className={i >= bars.length - 3 ? "flex-1 bg-copper" : "flex-1 bg-white/25"}
                style={{ height: `${height}%` }}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
