import { ImageResponse } from 'next/og';

export const runtime = 'edge';
export const alt = 'GXZ Workflow Studio';
export const size = { width: 1200, height: 630 };
export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          padding: '64px 72px',
          background: '#f5f5f7',
          color: '#1d1d1f',
          fontFamily: 'Arial, sans-serif',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
          <svg width="78" height="78" viewBox="0 0 40 40">
            <rect width="40" height="40" rx="12" fill="#1d1d1f" />
            <path
              d="M28.5 14.3a10.2 10.2 0 1 0 0 12.1v-5.1h-8.1"
              fill="none"
              stroke="#fff"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M20.6 21.3h7.9"
              fill="none"
              stroke="#0071e3"
              strokeWidth="3"
              strokeLinecap="round"
            />
            <circle cx="11.7" cy="11.7" r="2.2" fill="#ff6b35" />
          </svg>
          <div
            style={{
              display: 'flex',
              fontSize: 24,
              fontWeight: 700,
              letterSpacing: 1,
            }}
          >
            GXZ / WORKFLOW STUDIO
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            gap: 22,
            maxWidth: 920,
          }}
        >
          <div
            style={{
              display: 'flex',
              color: '#ff6b35',
              fontSize: 18,
              fontWeight: 700,
              letterSpacing: 3,
            }}
          >
            AI WORKFLOWS + FRONT-END DELIVERY
          </div>
          <div
            style={{
              display: 'flex',
              fontSize: 66,
              lineHeight: 1.05,
              fontWeight: 700,
              letterSpacing: -2,
            }}
          >
            Turn overlooked work into useful tools.
          </div>
          <div style={{ display: 'flex', color: '#6e6e73', fontSize: 24 }}>
            Focused automation and front-end tools for small teams.
          </div>
        </div>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            color: '#6e6e73',
            fontSize: 18,
          }}
        >
          <span>guoxuzhi.email</span>
          <span style={{ color: '#0071e3' }}>INPUT → CLARIFY → SHIP</span>
        </div>
      </div>
    ),
    { ...size },
  );
}
