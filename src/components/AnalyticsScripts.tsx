import { useEffect } from "react";
import { analyticsConfig } from "@/config/analytics";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
    fbq: (...args: unknown[]) => void;
  }
}

const AnalyticsScripts = () => {
  useEffect(() => {
    // Google Tag Manager
    if (analyticsConfig.googleTagManagerId) {
      const gtmScript = document.createElement("script");
      gtmScript.innerHTML = `
        (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
        new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
        j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
        'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
        })(window,document,'script','dataLayer','${analyticsConfig.googleTagManagerId}');
      `;
      document.head.appendChild(gtmScript);
    }

    // Google Analytics 4
    if (analyticsConfig.googleAnalyticsId) {
      const gaScript = document.createElement("script");
      gaScript.async = true;
      gaScript.src = `https://www.googletagmanager.com/gtag/js?id=${analyticsConfig.googleAnalyticsId}`;
      document.head.appendChild(gaScript);

      const gaConfigScript = document.createElement("script");
      gaConfigScript.innerHTML = `
        window.dataLayer = window.dataLayer || [];
        function gtag(){dataLayer.push(arguments);}
        gtag('js', new Date());
        gtag('config', '${analyticsConfig.googleAnalyticsId}');
      `;
      document.head.appendChild(gaConfigScript);
    }

    // Meta Pixel (Facebook)
    if (analyticsConfig.metaPixelId) {
      const fbScript = document.createElement("script");
      fbScript.innerHTML = `
        !function(f,b,e,v,n,t,s)
        {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
        n.callMethod.apply(n,arguments):n.queue.push(arguments)};
        if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
        n.queue=[];t=b.createElement(e);t.async=!0;
        t.src=v;s=b.getElementsByTagName(e)[0];
        s.parentNode.insertBefore(t,s)}(window, document,'script',
        'https://connect.facebook.net/en_US/fbevents.js');
        fbq('init', '${analyticsConfig.metaPixelId}');
        fbq('track', 'PageView');
      `;
      document.head.appendChild(fbScript);
    }
  }, []);

  return null;
};

export default AnalyticsScripts;
