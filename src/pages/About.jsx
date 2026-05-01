export default function About() {
  return (
    <div style={S.page}>
      <div style={S.container}>
        <h1 style={S.title}>Tentang <span style={S.accent}>BookLib</span></h1>
        <p style={S.desc}>
          BookLib adalah aplikasi perpustakaan digital yang memungkinkan kamu untuk menjelajahi, 
          mengelola, dan menemukan buku-buku menarik dari berbagai genre.
        </p>
        <div style={S.cards}>
          {[
            { label: "Misi", text: "Mendekatkan pembaca dengan buku yang tepat." },
            { label: "Teknologi", text: "Dibangun dengan React + React Router." },
            { label: "Developer", text: "Dibuat sebagai tugas React Routing & State Management." },
          ].map((item) => (
            <div key={item.label} style={S.card}>
              <div style={{ fontSize: "2rem" }}>{item.icon}</div>
              <h3 style={S.cardTitle}>{item.label}</h3>
              <p style={{ color: "#aaa" }}>{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
const S = {
  page: { minHeight: "calc(100vh - 64px)", backgroundColor: "#0f1f12", color: "#f3e8cc", display: "flex", alignItems: "center", justifyContent: "center", padding: "2rem" },
  container: { maxWidth: "800px", textAlign: "center" },
  title: { fontSize: "2.5rem", marginBottom: "1rem" },
  accent: { color: "#ffc926" },
  desc: { color: "#a8c4a2", fontSize: "1.1rem", lineHeight: 1.7, marginBottom: "3rem" },
  cards: { display: "flex", gap: "1.5rem", justifyContent: "center", flexWrap: "wrap" },
  card: { backgroundColor: "#1a3320", padding: "1.5rem", borderRadius: "12px", width: "200px", border: "1px solid #2a4a30" },
  cardTitle: { color: "#ffc926", margin: "0.5rem 0" },
};