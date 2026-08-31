type BrandLogoProps = { className?: string };

export default function BrandLogo({ className = '' }: BrandLogoProps) {
  return (
    <svg className={`brand-logo ${className}`.trim()} viewBox="0 0 40 40" role="img" aria-hidden="true">
      <rect width="40" height="40" rx="12" fill="currentColor" />
      <path d="M28.5 14.3a10.2 10.2 0 1 0 0 12.1v-5.1h-8.1" fill="none" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M20.6 21.3h7.9" fill="none" stroke="#0071e3" strokeWidth="3" strokeLinecap="round" />
      <circle cx="11.7" cy="11.7" r="2.2" fill="#ff6b35" />
    </svg>
  );
}
