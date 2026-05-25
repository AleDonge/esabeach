export default function Footer() {
  return (
    <footer className="bg-navy pb-10 pt-2 text-white">
      <div className="luxury-container">
        <div className="grid gap-12 border-t border-white/[.04] pt-12 md:grid-cols-[1.35fr_.7fr_1fr_1fr] md:gap-20">
          <div>
            <h2 className="text-[17px] font-bold uppercase tracking-[.55em]">ESABEACH</h2>
            <p className="mt-8 max-w-[310px] text-[14px] leading-[1.6] text-white/70">
              Dalle serate di relax alle serate più vive dell'estate.<br />Esabeach è l'esperienza che trasformaogni momento<br />in qualcosa di speciale.
            </p>
            <div className="mt-9 flex gap-9 text-[12px] font-bold uppercase tracking-[.1em] text-white">
              <a href="#" className="transition-opacity hover:opacity-60">Instagram</a>
              <a href="#" className="transition-opacity hover:opacity-60">Facebook</a>
            </div>
          </div>

          <div>
            <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[.18em] text-white/70">Info</h3>
            <ul className="space-y-4 text-[12px] font-bold uppercase tracking-[.08em] text-white/78">
              <li><a href="#about">About</a></li>
              <li><a href="mailto:esabeachsrl@gmail.com">Contact</a></li>
              <li><a href="#">FAQ</a></li>
              <li><a href="#">Careers</a></li>
            </ul>
          </div>

          <div>
            <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[.18em] text-white/70">Location</h3>
            <p className="text-[12px] font-bold uppercase leading-[1.6] tracking-[.08em] text-white/78">
              Viale della Vittoria, snc<br />63821 Porto Sant'Elpidio<br />Marche, Italy
            </p>
            <a href="#" className="mt-8 inline-flex text-[12px] font-bold uppercase tracking-[.08em] text-white">Get Directions ↗</a>
          </div>

          <div>
            <h3 className="mb-7 text-[11px] font-bold uppercase tracking-[.18em] text-white/70">Contact</h3>
            <p className="text-[12px] font-bold uppercase leading-[1.8] tracking-[.08em] text-white/78">
              esabeachsrl@gmail.com<br />+39 338 427 4310
            </p>
          </div>
        </div>

        <div className="mt-20 flex flex-col gap-6 text-[10px] font-bold uppercase tracking-[.12em] text-white/45 md:flex-row md:items-center md:justify-between">
          <p>© ESABEACH 2024 — All rights reserved</p>
          <div className="flex gap-12">
            <a href="/privacy-policy">Privacy Policy</a>
            <a href="#">Terms & Conditions</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
