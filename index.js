const express = require("express");
const app = express();
const port = process.env.PORT || 3000;

app.get("/", (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html lang="ja">
    <head>
      <meta charset="UTF-8" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <title>My Modern Site</title>
      <style>
        body { margin: 0; font-family: sans-serif; background: #f4f4f4; color: #333; }
        header { background: #222; color: white; padding: 1rem; text-align: center; }
        .hero { padding: 3rem 1rem; background: #fff; text-align: center; }
        .hero h1 { font-size: 2rem; margin-bottom: 0.5rem; }
        .hero p { font-size: 1.1rem; color: #666; }
        .features { display: flex; flex-wrap: wrap; justify-content: center; gap: 1rem; padding: 2rem 1rem; }
        .feature { background: white; padding: 1rem; border-radius: 8px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); width: 250px; text-align: center; }
        footer { background: #222; color: white; text-align: center; padding: 1rem; font-size: 0.9rem; }
        @media (max-width: 600px) {
          .features { flex-direction: column; align-items: center; }
        }
      </style>
    </head>
    <body>
      <header>
        <h2>My Node App</h2>
      </header>

      <div class="hero">
        <h1>ようこそ！</h1>
        <p>これはExpressで作った、今風な静的レイアウトのデモサイトです。</p>
      </div>

      <section class="features">
        <div class="feature">
          <h3>シンプル</h3>
          <p>余計なフレームワークなしで、HTMLとCSSだけで構成。</p>
        </div>
        <div class="feature">
          <h3>モバイル対応</h3>
          <p>スマホでも綺麗に見えるようにレスポンシブ設計。</p>
        </div>
        <div class="feature">
          <h3>高速表示</h3>
          <p>CDNやJSライブラリ不要で高速に表示。</p>
        </div>
      </section>

      <footer>
        &copy; 2025 My Node App. All rights reserved.
      </footer>
    </body>
    </html>
  `);
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
