export default function AdminPage() {
  return <main className="adminSimple">
    <div className="adminSimpleCard">
      <img src="/logo.png" alt="Seaside Beach"/>
      <p>YÖNETİM PANELİ</p>
      <h1>İçerik Yönetimi</h1>
      <p>Bu sürüm rezervasyonsuz tanıtım sitesidir. Menü, galeri ve fiyat bilgileri dosyalardan yönetilir.</p>
      <div className="adminLinks">
        <a href="/">Ana Sayfa</a>
        <a href="/menu">Menü</a>
      </div>
    </div>
  </main>
}
