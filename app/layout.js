import "../styles/globals.css";
import Footer from "../component/Footer";

export const metadata = {
  title: "BarberApp",
  description: "تطبيق حجز وإدارة المواعيد للحلاقين",
  icons: {
    icon: '/logo.png',
    shortcut: '/logo.png',
    apple: '/logo.png',
  },
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
