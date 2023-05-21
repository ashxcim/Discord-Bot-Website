import Document, { Html, Head, Main, NextScript } from "next/document";

class MyDocument extends Document {

  render() {
    return (
      <Html>
        <Head>
          <link rel="apple-touch-icon" href="/logo.jpg" />
          <meta name="robots" content="index,follow" />
          <meta name="googlebot" content="index,follow" />
          <meta
            name="description"
            content="AlisaBOT 01.01.2022 Tarihinde Kurulun Bir Bottur .Moderasyon,Eğlence,Guard,Ve Daha Fazlası SizlerleSizden Ricam Lütfen Botumuza Oy Vererek Bize Çok Destek Olmuş Olursunuz Saygılarımla"
          />
          <meta name="twitter:card" content="summary" />
          <meta name="twitter:site" content="@AlisaBot" />
          <meta name="twitter:creator" content="@AlisaBot" />
          <meta property="og:url" content="https://AlisaBot.vercel.app" />
          <meta property="og:type" content="website" />
          <meta property="og:title" content="AlisaBot" />
          <link
            rel="icon"
            href="https://cdn.discordapp.com/attachments/1102685799226552341/1109139165754429490/Adsz_tasarm_-_2023-05-15T205940.953.png"
            type="image/x-icon"
          />
          <meta
            property="og:description"
            content="AlisaBOT 01.01.2022 Tarihinde Kurulun Bir Bottur .Moderasyon,Eğlence,Guard,Ve Daha Fazlası SizlerleSizden Ricam Lütfen Botumuza Oy Vererek Bize Çok Destek Olmuş Olursunuz Saygılarımla"
          />
          <meta property="og:image" content="/img/logo.jpg" />
          <meta property="og:image:alt" content="AlisaBot" />
          <meta property="og:locale" content="en_GB" />
          <meta
            property="og:site_name"
            content="AlisaBot"
          />
          <meta name="theme-color" content="#6108dd" />
          <link rel="icon" href="/img/logo.jpg" type="image/x-icon" />
          <link
            href="https://fonts.googleapis.com/css2?family=Poppins:wght@400;500;600&display=swap"
            rel="stylesheet"
          />
          <link
            href="https://pro.fontawesome.com/releases/v6.0.0-beta1/css/all.css"
            rel="stylesheet"
          />
          <link rel="stylesheet" href="/css/nprogress.css" />
    
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default MyDocument;
