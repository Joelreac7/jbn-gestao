
export const metadata = {
  title: "JBN Gestão",
  description: "Sistema de gestão JBN Eventos",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-br">
      <body style={{fontFamily:"Arial, sans-serif", margin:0}}>
        {children}
      </body>
    </html>
  );
}
