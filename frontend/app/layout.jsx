import "@/assets/scss/main.scss"
import Favicon from "@/public/favicon.ico";


import AnimatedCursor from 'react-animated-cursor';
import SwitchDark from "@/components/Ui/SwitchDark";
import { Mada, Reem_Kufi,Kufam ,Alexandria,Rakkas,Tajawal,Changa,Cairo} from "next/font/google";
import { siteConfig } from "@/config/site";
const cairo=Cairo({
  subsets: ['arabic'],
  weight:['200', '300', '400','500', '600', '700', '800', '900'],
  variable: "--font-cairo",
});
const changa = Changa({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "600", "700", "800"],
  variable: "--font-changa",
})
const tajawal = Tajawal({
  subsets: ["arabic"],
  weight: ["200", "300", "400", "500", "700", "800", "900"],
  variable: "--font-tajawal",
})
const rakkas = Rakkas({
  subsets: ["arabic"],
  weight:['400'],
  variable: "--font-rakkas",
})
const alexandria =Alexandria({
  subsets: ["arabic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-alexandria",
})
const kufam= Kufam({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-kufam",
})
const mada = Mada({
  subsets: ["arabic"],
  weight: ['200', '300', '400', '500', '600', '700', '800', '900'],
  variable: "--font-mada",
});
const reemkufi = Reem_Kufi({
  subsets: ["arabic"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-reem-kufi",
});

export const viewport = {
  width: "device-width",
  initialScale: 1.0,

}

export const metadata = {
  metadataBase: new URL(siteConfig.url),
  robots:{
    index: true,
    follow: true,
  },
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`
  },
  verification: {
    google: 'tG8Qr_6y_npPXSAU',
    
  },
  description: siteConfig.description,
  keywords: [
    "محمد الهويمل",
    "محمد عبدالعزيز الهويمل",
    "الهويمل",
    "إدارة التعليم بمحافظة القويعية",
    "تعليم القويعية",
    "محافظة الرين",
    "مكتب التعليم بمحافظة الرين",
    "مكتب الرين",
    "الرين",
    "تعليم الرين",
    "ال هويمل",
    "آل هويمل",
    "التعليم بالرين",
    "بن هويمل",
    "القزعان",
    "محمد القزعان",
    siteConfig.name,
 
  ],
  authors: [
    {
      name: "محمد الهويمل",
      url: "https://github.com/mhuwaimel"
    }
  ],

  openGraph: {
    type: "website",
    locale: "ar_SA",
    url: siteConfig.url,
    title: siteConfig.name,
    description: siteConfig.description,
    siteName: siteConfig.name
  },
  icons: {
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
   rel: "icon", url: Favicon.src 

  },
  manifest: "/manifest.json"
}

export default function RootLayout({ children }) {
  return (
    <html lang="ar" dir="rtl">
      <header>
    <link rel="icon" type="image/x-icon" href="./favicon.ico" />
      </header>
<body className={`${reemkufi.variable} ${mada.variable} ${kufam.variable} ${rakkas.variable } ${alexandria.variable} 
${tajawal.variable} ${changa.variable} ${cairo.variable}
`}>
      <div>
      <AnimatedCursor
        innerSize={8}
        outerSize={44}
        color='255 160, 1'
        outerAlpha={0.3}
        innerScale={0.7}
        outerScale={1.2}
      />
      <div className='align-content-start'>
      <SwitchDark />
   </div>
       
      {children}
    </div>
        
        </body>
    </html>
  );
}
