import React from 'react'

export default function Marquee() {
  return (
    <div style={{ overflow: 'hidden', whiteSpace: 'nowrap', width: '100%' }}>
      <p
        style={{
          display: 'inline-block',
          paddingLeft: '100%',
          animation: 'marquee 12s linear infinite',
          color: '#fd7e14',
          fontFamily: "'Oswald', system-ui",
          padding: '5px',
          fontWeight: 'bold'
        }}
      >
        Welcome to <span style={{ color: '#000', fontSize: '25px' }}>comicnova.com</span> - Dive into the world of comics! Read, download, and enjoy a wide selection of comics and books. Your ultimate comic reading and download experience awaits!
      </p>

      <style jsx>{`
        @keyframes marquee {
          0% {
            transform: translateX(100%);
          }
          100% {
            transform: translateX(-100%);
          }
        }
      `}</style>
    </div>
  )
}
