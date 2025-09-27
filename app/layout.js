import "../styles/globals.css";
import Footer from "../Component/Footer";

export const metadata = {
  title: "BarberApp",
  description: "Réservation et gestion de rendez-vous pour barbiers",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <body className="bg-white">
        {children}
        <Footer />
      </body>
    </html>
  );
}
