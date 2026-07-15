import Gallery from "../components/Gallery";

const services = [
  ["Özel Localar", "Gölgelikli ve rahat alanlarda gün boyu konfor."],
  ["Denize Sıfır", "Altınkum’un berrak ve serin denizi."],
  ["Restaurant", "Burger, pizza, makarna ve özel tabaklar."],
  ["Cocktail Bar", "Yaza özel kokteyller ve soğuk içecekler."],
  ["Şezlong Alanı", "Sahile yakın, düzenli ve rahat alanlar."],
  ["Etkinlikler", "Müzik, özel günler ve sezon buluşmaları."],
];

export default function Home() {
  return (
    <main>
      <div className="ambient ambientOne" />
      <div className="ambient ambientTwo" />
      <div className="grain" />

      <section className="hero" id="top">
        <video autoPlay muted loop playsInline className="heroVideo">
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>

        <div className="heroOverlay" />

        <header className="navbar">
          <a href="#top">
            <img src="/logo.png" alt="Seaside Beach" className="logo" />
          </a>

          <nav>
            <a href="#about">Hakkımızda</a>
            <a href="#gallery">Galeri</a>
            <a href="/menu">Menü</a>
            <a href="#pricing">Giriş Bilgileri</a>
            <a href="#contact">İletişim</a>
          </nav>

          <a className="pill" href="#contact">
            Bize Ulaşın
          </a>
        </header>

        <div className="heroContent">
          <div className="heroBadge">SEASIDE BEACH • ÇEŞME</div>
          <p>ALTINKUM • ÇEŞME • İZMİR</p>
          <h1>Yazın en güzel hali</h1>
          <span>
            Berrak deniz, bohem localar, özel lezzetler ve unutulmaz anlar.
          </span>

          <div className="heroButtons">
            <a className="pill" href="#contact">
              Bize Ulaşın
            </a>
            <a className="ghost" href="/menu">
              Menüyü İncele
            </a>
          </div>

          <div className="heroInfo">
            <div>
              <strong>Altınkum</strong>
              <span>Çeşme / İzmir</span>
            </div>
            <div>
              <strong>Ücretsiz</strong>
              <span>Otopark</span>
            </div>
            <div>
              <strong>10 Yaş Altı</strong>
              <span>Ücretsiz</span>
            </div>
          </div>
        </div>

        <a className="scrollCue" href="#about">
          KEŞFET
          <span />
        </a>
      </section>

      <section id="about" className="section about aboutTight">
        <div className="aboutVisual reveal">
          <img src="/gallery/good-vibes.png" alt="Good Vibes Only" />
          <div className="floatingCard">
            <b>Altınkum</b>
            <span>Çeşme / İzmir</span>
          </div>
        </div>

        <div className="reveal delayOne">
          <p className="eyebrow">SEASIDE BEACH</p>
          <h2>Deniz, kum ve huzurun buluştuğu yer</h2>
          <p className="lead">
            Seaside Beach, Altınkum’un berrak denizi ile bohem beach
            atmosferini bir araya getiriyor.
          </p>

          <div className="serviceGrid">
            {services.map(([title, description]) => (
              <article key={title}>
                <h3>{title}</h3>
                <p>{description}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="section white gallerySection">
        <div className="sectionTitle reveal">
          <p className="eyebrow">SEASIDE ANLARI</p>
          <h2>Galeri</h2>
          <p>
            Denizin mavisi, bohem detaylar ve gün boyu süren Seaside atmosferi.
          </p>
        </div>

        <Gallery />
      </section>

      <section className="section videos">
        <div className="sectionTitle left reveal">
          <p className="eyebrow">SEASIDE VİDEOLARI</p>
          <h2>Denizden gün batımına</h2>
        </div>

        <div className="videoGrid">
          <div className="videoCard reveal">
            <video controls playsInline poster="/gallery/drone.png">
              <source src="/videos/seaside.mp4" type="video/mp4" />
            </video>
            <span>Time to Seaside</span>
          </div>

          <div className="videoCard reveal delayOne">
            <video controls playsInline poster="/beach.png">
              <source src="/videos/event.mp4" type="video/mp4" />
            </video>
            <span>Gün batımından geceye</span>
          </div>
        </div>
      </section>

      <section className="menuTeaser reveal">
        <div>
          <p className="eyebrow">SEASIDE LEZZETLERİ</p>
          <h2>Menümüzü keşfet</h2>
          <p>
            Yemekler, kokteyller, kahveler ve daha fazlası ayrı menü sayfamızda.
          </p>
        </div>
        <a className="pill" href="/menu">
          Menüye Git
        </a>
      </section>

      <section id="pricing" className="section pricing">
        <div className="pricingPoster reveal">
          <img src="/gallery/pricing-2026.png" alt="2026 giriş bilgileri" />
        </div>

        <div className="reveal delayOne">
          <p className="eyebrow">2026 GİRİŞ BİLGİLERİ</p>
          <h2>Gün boyu Seaside keyfi</h2>
          <p className="lead">
            Girişte uygulanan harcama limiti gün boyunca yiyecek ve içecek
            alışverişlerinizde kullanılabilir.
          </p>

          <div className="priceCards">
            <article>
              <span>HAFTA İÇİ</span>
              <strong>2.000 TL</strong>
            </article>

            <article className="dark">
              <span>HAFTA SONU</span>
              <strong>2.500 TL</strong>
            </article>
          </div>

          <ul className="notes">
            <li>10 yaş altı çocuklar ücretsizdir.</li>
            <li>Otopark ücretsizdir.</li>
            <li>Fiyatlar sezon içinde güncellenebilir.</li>
          </ul>
        </div>
      </section>

      <section className="section faq">
        <div className="sectionTitle reveal">
          <p className="eyebrow">SIK SORULANLAR</p>
          <h2>Gelmeden önce</h2>
        </div>

        <div className="faqGrid">
          <article>
            <h3>Konum nerede?</h3>
            <p>Altınkum, Çiftlikköy, 35000 Çeşme / İzmir.</p>
          </article>
          <article>
            <h3>Otopark ücretli mi?</h3>
            <p>Misafirlerimiz için otopark ücretsizdir.</p>
          </article>
          <article>
            <h3>Çocuklar ücretli mi?</h3>
            <p>10 yaş altı çocuklar ücretsizdir.</p>
          </article>
          <article>
            <h3>Menüye nasıl ulaşırım?</h3>
            <p>Üst menüdeki “Menü” bağlantısından tüm kategorilere ulaşabilirsin.</p>
          </article>
        </div>
      </section>

      <section id="contact" className="section contact">
        <div className="sectionTitle reveal">
          <p className="eyebrow">İLETİŞİM</p>
          <h2>Seaside Beach’e ulaşın</h2>
        </div>

        <div className="contactGrid">
          <article className="reveal">
            <span>📍</span>
            <h3>Konum</h3>
            <p>Altınkum, Çiftlikköy, 35000 Çeşme / İzmir</p>
            <a
              href="https://www.google.com/maps/search/?api=1&query=Altınkum,+Çiftlikköy,+35000+Çeşme,+İzmir"
              target="_blank"
              rel="noreferrer"
            >
              Yol Tarifi Al
            </a>
          </article>

          <article className="reveal delayOne">
            <span>📸</span>
            <h3>Instagram</h3>
            <p>Etkinlikleri ve paylaşımları takip edin.</p>
            <a
              href="https://www.instagram.com/seasidebeach.tr"
              target="_blank"
              rel="noreferrer"
            >
              @seasidebeach.tr
            </a>
          </article>
        </div>
      </section>

      <footer>
        <img src="/logo.png" alt="Seaside Beach" />
        <p>Altınkum, Çiftlikköy, Çeşme / İzmir</p>
        <a
          href="https://www.instagram.com/seasidebeach.tr"
          target="_blank"
          rel="noreferrer"
        >
          @seasidebeach.tr
        </a>
        <p>© 2026 Seaside Beach</p>
      </footer>
    </main>
  );
}
