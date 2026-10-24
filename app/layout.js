export const metadata = {
  title: "Expediente Técnico — C.S. Accaso I-2",
  description: "Sistema de control de documentación",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es">
      <body style={{ margin: 0, padding: 0, background: "#010708" }}>
        {children}
      </body>
    </html>
  );
}
