// app/_document.tsx
import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
    return (
        <Html lang="en">
            <Head />
            <body>
                <div id="preload-splash">
                    <div className="spinner"></div>
                </div>

                <Main />
                <NextScript />

                <style>{`
          #preload-splash {
            position: fixed;
            inset: 0;
            background: radial-gradient(#CECECE, #fff);
            display: flex;
            align-items: center;
            justify-content: center;
            z-index: 99999;
            transition: opacity 0.4s ease;
          }
          .spinner {
            width: 48px;
            height: 48px;
            border: 3px solid #aaa;
            border-top-color: #1e90ff;
            border-radius: 50%;
            animation: spin 0.8s linear infinite;
          }
          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
            </body>
        </Html>
    );
}
