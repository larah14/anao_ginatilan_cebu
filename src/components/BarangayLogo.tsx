/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

interface BarangayLogoProps {
  className?: string;
  size?: number | string;
}

export default function BarangayLogo({ className = '', size = '48' }: BarangayLogoProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 100 100"
      className={`${className} select-none`}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* Outer black accent edge */}
      <circle cx="50" cy="50" r="49" fill="none" stroke="#1a1a1a" strokeWidth="0.75" />

      {/* Main Yellow Band */}
      <circle cx="50" cy="50" r="48" fill="#ffd014" stroke="#1a1a1a" strokeWidth="1" />

      {/* Inner thin circular separator inside yellow band */}
      <circle cx="50" cy="50" r="36" fill="none" stroke="#1a1a1a" strokeWidth="1" />

      {/* Text Paths definitions */}
      <defs>
        {/* Upper arc path for "BARANGAY ANAO" */}
        <path
          id="barangay-text-path"
          d="M 12 50 A 38 38 0 0 1 88 50"
          fill="none"
        />
        {/* Lower arc path for "GINATILAN, CEBU" - right to left so text is right-side up */}
        <path
          id="cebu-text-path"
          d="M 88 50 A 38 38 0 0 1 12 50"
          fill="none"
        />
      </defs>

      {/* Text: BARANGAY ANAO */}
      <text font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="8.5" fill="#1a1a1a" letter-spacing="1">
        <textPath href="#barangay-text-path" startOffset="50%" text-anchor="middle">
          BARANGAY ANAO
        </textPath>
      </text>

      {/* Text: GINATILAN, CEBU */}
      <text font-family="system-ui, -apple-system, sans-serif" font-weight="900" font-size="7.5" fill="#1a1a1a" letter-spacing="0.75">
        <textPath href="#cebu-text-path" startOffset="50%" text-anchor="middle">
          GINATILAN, CEBU
        </textPath>
      </text>

      {/* Blue separating dots on left and right */}
      <circle cx="12" cy="50" r="2" fill="#005bac" stroke="#1a1a1a" strokeWidth="0.5" />
      <circle cx="88" cy="50" r="2" fill="#005bac" stroke="#1a1a1a" strokeWidth="0.5" />

      {/* Center Green Circle boundary */}
      <circle cx="50" cy="50" r="35" fill="#0e8334" stroke="#1a1a1a" strokeWidth="1.25" />

      {/* Inner gold circular accent line */}
      <circle cx="50" cy="50" r="34" fill="none" stroke="#ffd014" strokeWidth="0.5" stroke-opacity="0.3" />

      {/* Anahaw Palm Tree representation */}
      <g id="anahaw-tree">
        {/* Dirt/Sand support base mound at the bottom of inner circle */}
        <path
          d="M 33 74 Q 50 71 67 74 C 63 80, 37 80, 33 74 Z"
          fill="#ecd599"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />

        {/* Tree Trunk */}
        <path
          d="M 48 74 L 48 56 Q 50 54 52 56 L 52 74 Z"
          fill="#f3efe0"
          stroke="#1a1a1a"
          strokeWidth="0.75"
        />
        {/* Trunk horizontal texture lines */}
        <line x1="48.5" y1="60" x2="51.5" y2="60" stroke="#1a1a1a" strokeWidth="0.5" />
        <line x1="48" y1="65" x2="52" y2="65" stroke="#1a1a1a" strokeWidth="0.5" />
        <line x1="48" y1="70" x2="52" y2="70" stroke="#1a1a1a" strokeWidth="0.5" />

        {/* Fan Palm Leaves - beautifully detailed radiating fan-shapes */}
        
        {/* Leaf 1: Top Center-Left */}
        <path
          d="M 50 56 Q 37 40 45 32 Q 50 36 50 56"
          fill="#cbf33b"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Leaf 1 Ribs */}
        <path d="M 50 56 L 41 38 M 50 56 L 45 34 M 50 56 L 49 33" stroke="#0e8334" strokeWidth="0.5" stroke-opacity="0.7" />

        {/* Leaf 2: Top Center-Right */}
        <path
          d="M 50 56 Q 63 40 55 32 Q 50 36 50 56"
          fill="#cbf33b"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Leaf 2 Ribs */}
        <path d="M 50 56 L 59 38 M 50 56 L 55 34 M 50 56 L 51 33" stroke="#0e8334" strokeWidth="0.5" stroke-opacity="0.7" />

        {/* Leaf 3: Far Left (pointing horizontal-down) */}
        <path
          d="M 50 56 Q 26 48 31 56 Q 38 60 50 56"
          fill="#9fcc18"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Leaf 3 Ribs */}
        <path d="M 50 56 L 31 51 M 50 56 L 31 55 M 50 56 L 34 58" stroke="#0e8334" strokeWidth="0.5" stroke-opacity="0.7" />

        {/* Leaf 4: Far Right (pointing horizontal-down) */}
        <path
          d="M 50 56 Q 74 48 69 56 Q 62 60 50 56"
          fill="#9fcc18"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Leaf 4 Ribs */}
        <path d="M 50 56 L 69 51 M 50 56 L 69 55 M 50 56 L 66 58" stroke="#0e8334" strokeWidth="0.5" stroke-opacity="0.7" />

        {/* Leaf 5: Mid Upper-Left */}
        <path
          d="M 50 56 Q 28 32 38 27 Q 44 32 50 56"
          fill="#b7e624"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Leaf 5 Ribs */}
        <path d="M 50 56 L 33 34 M 50 56 L 37 30 M 50 56 L 41 28" stroke="#0e8334" strokeWidth="0.5" stroke-opacity="0.7" />

        {/* Leaf 6: Mid Upper-Right */}
        <path
          d="M 50 56 Q 72 32 62 27 Q 56 32 50 56"
          fill="#b7e624"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Leaf 6 Ribs */}
        <path d="M 50 56 L 67 34 M 50 56 L 63 30 M 50 56 L 59 28" stroke="#0e8334" strokeWidth="0.5" stroke-opacity="0.7" />

        {/* Leaf 7: Horizontal Left-Up */}
        <path
          d="M 50 56 Q 24 40 33 44 Q 40 48 50 56"
          fill="#aad81b"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Leaf 7 Ribs */}
        <path d="M 50 56 L 27 41 M 50 56 L 30 43 M 50 56 L 33 46" stroke="#0e8334" strokeWidth="0.5" stroke-opacity="0.7" />

        {/* Leaf 8: Horizontal Right-Up */}
        <path
          d="M 50 56 Q 76 40 67 44 Q 60 48 50 56"
          fill="#aad81b"
          stroke="#1a1a1a"
          strokeWidth="0.5"
        />
        {/* Leaf 8 Ribs */}
        <path d="M 50 56 L 73 41 M 50 56 L 70 43 M 50 56 L 67 46" stroke="#0e8334" strokeWidth="0.5" stroke-opacity="0.7" />

        {/* Small golden central core crown of palm */}
        <circle cx="50" cy="56" r="3" fill="#ffd014" stroke="#1a1a1a" strokeWidth="0.5" />
      </g>
    </svg>
  );
}
