export const metadata = {
  title: "RCN Marketplace",
  description: "Compre e venda com segurança no RCN Marketplace",
};

export default function RootLayout({ children }) {
  return (
    <html lang="pt-BR">
      <body style={{
        margin: 0,
        fontFamily: "Arial, sans-serif",
        backgroundColor: "#0d0d0d",
        color: "#fff",
      }}>
        {children}
      </body>
    </html>
  );
}
