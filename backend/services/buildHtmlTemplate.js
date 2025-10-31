export function buildHtmlTemplate({ title, introLines = [], rows = [], logoUrl }) {
  const primary = "#1e90ff"; // Loopera Blue
  const dark = "#0f172a";
  const light = "#ffffff";
  const textMuted = "#64748b";

  const introHtml = introLines
    .map(
      line =>
        `<p style="margin:0 0 8px 0;font-size:15px;line-height:1.6;color:${dark}">${line}</p>`
    )
    .join("");

  const rowsHtml = rows
    .map(
      ([label, value], idx, arr) => `
        <tr>
          <td style="padding:10px 14px;font-weight:600;background:#f8fafc;${idx !== arr.length - 1 ? "border-bottom:1px solid #e2e8f0;" : ""
        }width:40%;min-width:120px;color:${dark};word-break:break-word;">
            ${label}
          </td>
          <td style="padding:10px 14px;${idx !== arr.length - 1 ? "border-bottom:1px solid #e2e8f0;" : ""
        }color:${textMuted};word-break:break-word;">
            ${value || "N/A"}
          </td>
        </tr>`
    )
    .join("");

  return `
  <!doctype html>
  <html lang="en">
    <head>
      <meta charset="utf-8"/>
      <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
      <title>${title}</title>

      <style>
        @media only screen and (max-width: 600px) {
          body {
            padding: 8px !important;
          }
          .container {
            width: 100% !important;
            border-radius: 10px !important;
          }
          .header-text {
            font-size: 18px !important;
            padding: 10px !important;
          }
          .logo {
            height: 55px !important;
          }
          .content {
            padding: 18px !important;
          }
          table {
            font-size: 14px !important;
          }
          td {
            display: block;
            width: 100% !important;
            text-align: left !important;
          }
        }
      </style>
    </head>

    <body style="font-family:Inter,system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif;background:#f3f4f6;margin:0;padding:24px;">
      <div class="container" style="max-width:700px;margin:0 auto;background:white;border-radius:12px;overflow:hidden;box-shadow:0 10px 40px rgba(0,0,0,0.08)">
        
        <!-- Header -->
        <div style="background:${primary};padding:0px;display:flex;align-items:center;justify-content:space-between;flex-wrap:wrap;">
          <img class="logo" src="${logoUrl}" alt="Loopera Tech" style="height:75px;object-fit:contain;display:block;background-color:${light};padding:8px;" />
          <span class="header-text" style="color:white;font-weight:600;font-size:24px;padding:18px 24px;">${title}</span>
        </div>

        <!-- Body -->
        <div class="content" style="padding:28px 24px;">
          ${introHtml || `<p style="margin:0 0 8px 0;font-size:15px;line-height:1.6;color:${dark};">You’ve received a new request through the Loopera website. Details are below:</p>`}

          <div style="margin-top:16px;border:1px solid #e5e7eb;border-radius:8px;overflow:hidden">
            <table style="width:100%;border-collapse:collapse">
              ${rowsHtml}
            </table>
          </div>

          <p style="margin-top:24px;font-size:14px;line-height:1.6;color:${textMuted}">
            We’ll reach out soon. Meanwhile, you can learn more about us at
            <a href="https://loopera.tech" style="color:${primary};text-decoration:none;font-weight:500">loopera.tech</a>.
          </p>
        </div>

        <!-- Footer -->
        <div style="background:#f8fafc;padding:18px 24px;text-align:center;font-size:13px;color:${textMuted}">
          <p style="margin:0;">© ${new Date().getFullYear()} <strong>Loopera Tech</strong>. All rights reserved.</p>
          <p style="margin:4px 0 0;">WE DEVELOP SO YOU LEVEL UP</p>
        </div>

      </div>
    </body>
  </html>`;
}
