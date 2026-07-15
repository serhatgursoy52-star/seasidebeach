"use client";

import { useMemo, useState } from "react";

type MenuItem = {
  name: string;
  price: string;
};

type MenuGroup = {
  title: string;
  items: MenuItem[];
};

type MenuCategory = {
  id: string;
  title: string;
  subtitle?: string;
  groups: MenuGroup[];
};

const categories: MenuCategory[] = [
  {
    id: "alkol-kadeh",
    title: "ALKOL KADEH GİRİŞ",
    groups: [
      {
        title: "ALKOL KADEH",
        items: [
          { name: "Absolut Enerji", price: "790 TL" },
          { name: "Absolut Kadeh", price: "790 TL" },
          { name: "Bacardi", price: "790 TL" },
          { name: "Baileys", price: "790 TL" },
          { name: "Beluga", price: "1.490 TL" },
          { name: "Belvedere", price: "1.750 TL" },
          { name: "Blue Label", price: "2.990 TL" },
          { name: "Bombay Cin", price: "840 TL" },
          { name: "Chivas 12 YO", price: "990 TL" },
          { name: "Chivas 18", price: "1.990 TL" },
          { name: "Cin Soda Kadeh", price: "830 TL" },
          { name: "Cin Tonik Kadeh", price: "830 TL" },
          { name: "Fords Gin", price: "790 TL" },
          { name: "Gordon's Gin", price: "790 TL" },
          { name: "Grey Goose", price: "1.750 TL" },
          { name: "Havana", price: "790 TL" },
          { name: "Havana Dark Room", price: "790 TL" },
          { name: "Hendricks Cin", price: "1.750 TL" },
          { name: "Jack Daniel's Apple", price: "790 TL" },
          { name: "Jack Daniel's Fire", price: "790 TL" },
          { name: "Jack Daniel's Honey", price: "790 TL" },
          { name: "Jack Daniel's Double", price: "890 TL" },
          { name: "Malfy Cin", price: "990 TL" },
          { name: "Malfy Cin Rose", price: "890 TL" },
          { name: "Monkey 47", price: "990 TL" },
          { name: "Monkey Shoulder", price: "1.290 TL" },
          { name: "Woodford Reserve", price: "990 TL" },
        ],
      },
    ],
  },
  {
    id: "alkollu",
    title: "ALKOLLÜ İÇECEKLER",
    subtitle: "Alt Kategoriler",
    groups: [
      {
        title: "KLASİK KOKTEYLLER",
        items: [
          { name: "Aperol Spritz", price: "890 TL" },
          { name: "Cuba Libre", price: "890 TL" },
          { name: "Dry Martini", price: "890 TL" },
          { name: "Espresso Martini", price: "890 TL" },
          { name: "Kuzu Kulağı", price: "890 TL" },
          { name: "Long Island", price: "1.200 TL" },
          { name: "Margarita", price: "830 TL" },
          { name: "Mojito", price: "890 TL" },
          { name: "Negroni", price: "890 TL" },
          { name: "Old Fashion", price: "890 TL" },
          { name: "Piña Colada", price: "890 TL" },
          { name: "Pornstar Martini", price: "890 TL" },
          { name: "Whiskey Sour", price: "890 TL" },
        ],
      },
      {
        title: "İMZA KOKTEYLLER",
        items: [
          { name: "Lumiere", price: "990 TL" },
          { name: "Sea Side", price: "990 TL" },
          { name: "Seaside Vibes", price: "990 TL" },
          { name: "Solea", price: "990 TL" },
          { name: "Sunset", price: "890 TL" },
        ],
      },
      {
        title: "ŞAMPANYALAR",
        items: [
          { name: "Bottega", price: "5.000 TL" },
          { name: "Bottega Rose", price: "10.000 TL" },
          { name: "Bottega Silver", price: "5.000 TL" },
          { name: "Don Perignon", price: "60.000 TL" },
          { name: "Moet Chandon", price: "20.000 TL" },
          { name: "Moet Ice", price: "20.000 TL" },
          { name: "Moet Nir", price: "20.000 TL" },
          { name: "Prosecco", price: "4.500 TL" },
        ],
      },
    ],
  },
  {
    id: "bira",
    title: "BİRA GİRİŞ",
    groups: [
      {
        title: "BİRALAR",
        items: [
          { name: "Corona", price: "500 TL" },
          { name: "Cuba Beer", price: "850 TL" },
          { name: "Galsberg 33CL", price: "400 TL" },
          { name: "Heineken", price: "500 TL" },
          { name: "Mexican Beer", price: "600 TL" },
          { name: "Miller", price: "500 TL" },
          { name: "Tuborg 33CL", price: "400 TL" },
        ],
      },
    ],
  },
  {
    id: "cerez",
    title: "ÇEREZLER",
    groups: [
      {
        title: "ÇEREZLER",
        items: [{ name: "Çerez", price: "400 TL" }],
      },
    ],
  },
  {
    id: "dondurma",
    title: "DONDURMA",
    groups: [
      {
        title: "DONDURMA",
        items: [
          { name: "Bir Top Dondurma Bal Badem", price: "150 TL" },
          { name: "Bir Top Dondurma Böğürtlen", price: "150 TL" },
          { name: "Bir Top Dondurma Çikolata", price: "150 TL" },
          { name: "Bir Top Dondurma Çilek", price: "150 TL" },
          { name: "Bir Top Dondurma Karadut", price: "150 TL" },
          { name: "Bir Top Dondurma Kavun", price: "150 TL" },
          { name: "Bir Top Dondurma Kaymaklı", price: "150 TL" },
          { name: "Bir Top Dondurma Limon", price: "150 TL" },
          { name: "Bir Top Dondurma Oreo Parçacık", price: "150 TL" },
          { name: "Bir Top Dondurma Sakız", price: "150 TL" },
          { name: "Dondurma", price: "100 TL" },
          { name: "Kağıt Helva", price: "150 TL" },
          { name: "Kavun İçi Dondurma", price: "700 TL" },
        ],
      },
    ],
  },
  {
    id: "frozen",
    title: "FROZEN",
    groups: [
      {
        title: "FROZEN",
        items: [
          { name: "Orange Mango", price: "400 TL" },
          { name: "Pitaya Frozen", price: "400 TL" },
          { name: "Rooibos Peach Frozen", price: "400 TL" },
          { name: "Watermelon Frozen", price: "400 TL" },
        ],
      },
    ],
  },
  {
    id: "frozen-giris",
    title: "FROZEN GİRİŞ",
    groups: [
      {
        title: "FROZEN",
        items: [
          { name: "Orange Mango", price: "400 TL" },
          { name: "Pitaya Frozen", price: "400 TL" },
          { name: "Rooibos Peach Frozen", price: "400 TL" },
          { name: "Watermelon Frozen", price: "400 TL" },
        ],
      },
    ],
  },
  {
    id: "giris",
    title: "GİRİŞ",
    groups: [
      {
        title: "GİRİŞ",
        items: [{ name: "Loca", price: "10.000 TL" }],
      },
    ],
  },
  {
    id: "kokteyl",
    title: "KOKTEYLLER GİRİŞ",
    groups: [
      {
        title: "KOKTEYLLER",
        items: [
          { name: "Aperol Spritz", price: "890 TL" },
          { name: "Cuba Libre", price: "890 TL" },
          { name: "Dry Martini", price: "890 TL" },
          { name: "Espresso Martini", price: "890 TL" },
          { name: "Kuzu Kulağı", price: "890 TL" },
          { name: "Long Island", price: "1.200 TL" },
          { name: "Lumiere", price: "990 TL" },
          { name: "Margarita", price: "830 TL" },
          { name: "Mojito", price: "890 TL" },
          { name: "Negroni", price: "890 TL" },
          { name: "Old Fashion", price: "890 TL" },
          { name: "Piña Colada", price: "890 TL" },
          { name: "Pornstar Martini", price: "890 TL" },
          { name: "Sea Side", price: "990 TL" },
          { name: "Seaside Vibes", price: "990 TL" },
          { name: "Solea", price: "990 TL" },
          { name: "Sunset", price: "890 TL" },
          { name: "Whiskey Sour", price: "890 TL" },
        ],
      },
    ],
  },
  {
    id: "shot",
    title: "SHOTLAR GİRİŞ",
    groups: [
      {
        title: "SHOTLAR",
        items: [
          { name: "Casemigos", price: "950 TL" },
          { name: "Don Julio", price: "990 TL" },
          { name: "El Jimador", price: "590 TL" },
          { name: "Jack Daniel's Apple", price: "590 TL" },
          { name: "Jack Daniel's Fire", price: "590 TL" },
          { name: "Jack Daniel's Honey", price: "590 TL" },
          { name: "Jager", price: "690 TL" },
          { name: "Jager Orange", price: "690 TL" },
          { name: "Ojo De Tigre", price: "400 TL" },
          { name: "Olmega", price: "590 TL" },
          { name: "Olmega Gold", price: "590 TL" },
          { name: "Skinos", price: "590 TL" },
        ],
      },
    ],
  },
  {
    id: "sicak-kahve",
    title: "SICAK KAHVELER",
    groups: [
      {
        title: "SICAK KAHVELER",
        items: [
          { name: "Americano", price: "350 TL" },
          { name: "Cappuccino", price: "400 TL" },
          { name: "Caramel Latte", price: "500 TL" },
          { name: "Caramel Macchiato", price: "500 TL" },
          { name: "Cortado", price: "500 TL" },
          { name: "Double Espresso", price: "200 TL" },
          { name: "Double Türk Kahvesi", price: "250 TL" },
          { name: "Flat White", price: "450 TL" },
          { name: "Latte", price: "400 TL" },
          { name: "Mocha", price: "500 TL" },
          { name: "Single Espresso", price: "150 TL" },
          { name: "Türk Kahvesi", price: "200 TL" },
          { name: "White Chocolate Mocha", price: "500 TL" },
        ],
      },
    ],
  },
  {
    id: "soft",
    title: "SOFT GİRİŞ",
    groups: [
      {
        title: "SOFT İÇECEKLER",
        items: [
          { name: "Alkolsüz Kokteyl", price: "450 TL" },
          { name: "Ayran", price: "200 TL" },
          { name: "Büyük Su", price: "250 TL" },
          { name: "Churchill", price: "350 TL" },
          { name: "Cool Lime", price: "350 TL" },
          { name: "Fanta", price: "300 TL" },
          { name: "İnişdibi Soda", price: "150 TL" },
          { name: "Kola", price: "300 TL" },
          { name: "Kola Zero", price: "300 TL" },
          { name: "Küçük Su", price: "100 TL" },
          { name: "Limonata", price: "350 TL" },
          { name: "San Pellegrino", price: "300 TL" },
          { name: "Sprite", price: "300 TL" },
          { name: "Strawberry Hibiscus", price: "350 TL" },
          { name: "Tonik Şişe", price: "250 TL" },
          { name: "Uludağ Mineralli Su", price: "250 TL" },
        ],
      },
      {
        title: "MEYVE SULARI",
        items: [
          { name: "Ananas", price: "250 TL" },
          { name: "Elma Suyu", price: "250 TL" },
          { name: "Portakal", price: "250 TL" },
        ],
      },
      {
        title: "ICE TEA",
        items: [
          { name: "Ice Tea Limon", price: "300 TL" },
          { name: "Ice Tea Mango", price: "300 TL" },
          { name: "Ice Tea Şeftali", price: "300 TL" },
        ],
      },
      {
        title: "REDBULL",
        items: [{ name: "Redbull", price: "350 TL" }],
      },
    ],
  },
  {
    id: "soguk-icecek",
    title: "SOĞUK İÇECEKLER",
    subtitle: "Alt Kategoriler",
    groups: [
      {
        title: "SOĞUK İÇECEKLER",
        items: [
          { name: "Ayran", price: "200 TL" },
          { name: "Büyük Su", price: "250 TL" },
          { name: "Churchill", price: "350 TL" },
          { name: "Cool Lime", price: "350 TL" },
          { name: "Fanta", price: "300 TL" },
          { name: "Kola", price: "300 TL" },
          { name: "Kola Zero", price: "300 TL" },
          { name: "Küçük Su", price: "100 TL" },
          { name: "Limonata", price: "350 TL" },
          { name: "San Pellegrino", price: "300 TL" },
          { name: "Sprite", price: "300 TL" },
          { name: "Tonik Şişe", price: "250 TL" },
        ],
      },
    ],
  },
  {
    id: "soguk-kahve",
    title: "SOĞUK KAHVELER",
    groups: [
      {
        title: "SOĞUK KAHVELER",
        items: [
          { name: "Ice Americano", price: "350 TL" },
          { name: "Ice Flat White", price: "450 TL" },
          { name: "Ice Mocha", price: "500 TL" },
          { name: "Ice White Chocolate Mocha", price: "500 TL" },
          { name: "Ice Latte", price: "400 TL" },
        ],
      },
    ],
  },
  {
    id: "yiyecek",
    title: "YİYECEKLER",
    subtitle: "Alt Kategoriler",
    groups: [
      {
        title: "BURGERLER",
        items: [
          { name: "Cheesburger", price: "1.090 TL" },
          { name: "Klasik Hamburger", price: "990 TL" },
          { name: "Seaside Smash Burger", price: "1.190 TL" },
          { name: "Tavuk Burger", price: "890 TL" },
        ],
      },
      {
        title: "WRAPLAR",
        items: [
          { name: "Bonfile Wrap", price: "1.290 TL" },
          { name: "Tavuk Wrap", price: "890 TL" },
          { name: "Vejeteryan Wrap", price: "790 TL" },
        ],
      },
      {
        title: "PİZZALAR",
        items: [
          { name: "Füme Etli Pizza", price: "1.340 TL" },
          { name: "Margarita", price: "940 TL" },
          { name: "Tire Sucuklu Pizza", price: "1.140 TL" },
          { name: "Üç Peynirli", price: "1.090 TL" },
        ],
      },
      {
        title: "ANA YEMEKLER",
        items: [
          { name: "Izgara Bonfile", price: "1.490 TL" },
          { name: "Izgara Köfte", price: "890 TL" },
          { name: "Izgara Somon", price: "1.390 TL" },
          { name: "Tavuk Izgara", price: "890 TL" },
        ],
      },
      {
        title: "MAKARNALAR",
        items: [
          { name: "Deniz Mahsullü Tagliatelle", price: "1.490 TL" },
          { name: "Penne Arrabbiata", price: "990 TL" },
          { name: "Pestolu Tagliatelle", price: "990 TL" },
          { name: "Tavuklu Penne", price: "990 TL" },
        ],
      },
      {
        title: "SALATALAR",
        items: [
          { name: "Çilekli Semiz Salata", price: "790 TL" },
          { name: "Izgara Tavuklu Sezar Salata", price: "890 TL" },
        ],
      },
      {
        title: "MEYVE & TATLI",
        items: [
          { name: "Kavun Yatağında Damla Sakızlı Dondurma", price: "490 TL" },
          { name: "Tropical Meyve Tabağı", price: "1.190 TL" },
        ],
      },
      {
        title: "PAYLAŞINCA GÜZEL",
        items: [
          { name: "Çıtır Tavuk", price: "990 TL" },
          { name: "Frankfurter Sosis Tabağı", price: "990 TL" },
          { name: "Karpuz Ezine", price: "690 TL" },
          { name: "Seaside Tabağı", price: "990 TL" },
          { name: "Tuzlu Erik", price: "590 TL" },
        ],
      },
    ],
  },
];

export default function MenuPage() {
  const [selectedId, setSelectedId] = useState<string | null>(null);

  const selected = useMemo(
    () => categories.find((category) => category.id === selectedId) ?? null,
    [selectedId]
  );

  return (
    <main className="categoryMenuPage">
      <section className="categoryMenuHero">
        <div className="categoryMenuHeroOverlay" />

        <header className="navbar categoryMenuNavbar">
          <a href="/">
            <img src="/logo.png" className="logo" alt="Seaside Beach" />
          </a>

          <nav>
            <a href="/">Ana Sayfa</a>
            <a href="/#gallery">Galeri</a>
            <a href="/#pricing">Giriş Bilgileri</a>
            <a href="/#contact">İletişim</a>
          </nav>

          <a className="pill" href="/">
            Ana Sayfa
          </a>
        </header>

        <div className="categoryMenuHeroContent">
          <p>SEASIDE BEACH</p>
          <h1>Dijital Menü</h1>
          <span>Kategorini seç, ürünleri ve fiyatları kolayca incele.</span>
        </div>
      </section>

      <section className="categoryMenuSection">
        <div className="categoryMenuHeading">
          <div>
            <p>KATEGORİLER</p>
            <h2>Ne aramıştınız?</h2>
          </div>

          <span>{categories.length} Çeşit</span>
        </div>

        <div className="categoryMenuList">
          {categories.map((category) => (
            <button
              type="button"
              key={category.id}
              className="categoryMenuCard"
              onClick={() => setSelectedId(category.id)}
            >
              <div>
                <h3>{category.title}</h3>
                {category.subtitle && (
                  <p>
                    <span>◈</span>
                    {category.subtitle}
                  </p>
                )}
              </div>

              <div className="categoryMenuIcon" aria-hidden="true">
                ♜
              </div>

              <span className="categoryMenuArrow">›</span>
            </button>
          ))}
        </div>
      </section>

      {selected && (
        <div
          className="menuCategoryModal"
          role="dialog"
          aria-modal="true"
          aria-label={`${selected.title} menüsü`}
          onClick={() => setSelectedId(null)}
        >
          <div
            className="menuCategoryModalContent textMenuModal"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="menuCategoryModalHeader">
              <div>
                <p>SEASIDE MENÜ</p>
                <h2>{selected.title}</h2>
              </div>

              <button
                type="button"
                onClick={() => setSelectedId(null)}
                aria-label="Menüyü kapat"
              >
                ×
              </button>
            </div>

            <div className="textMenuGroups">
              {selected.groups.map((group) => (
                <section className="textMenuGroup" key={group.title}>
                  <div className="textMenuGroupTitle">
                    <span />
                    <h3>{group.title}</h3>
                    <span />
                  </div>

                  <div className="textMenuItems">
                    {group.items.map((item) => (
                      <div className="textMenuItem" key={`${group.title}-${item.name}`}>
                        <strong>{item.name}</strong>
                        <span className="textMenuDots" />
                        <b>{item.price}</b>
                      </div>
                    ))}
                  </div>
                </section>
              ))}
            </div>

            <p className="textMenuDisclaimer">
              Fiyatlar sezon içinde güncellenebilir. Güncel bilgi için
              @seasidebeach.tr hesabını takip edebilirsiniz.
            </p>
          </div>
        </div>
      )}

      <footer className="categoryMenuFooter">
        <img src="/logo.png" alt="Seaside Beach" />
        <p>Altınkum, Çiftlikköy, Çeşme / İzmir</p>
        <a href="/">Ana sayfaya dön</a>
      </footer>
    </main>
  );
}
