import React from 'react';

export default function Logo(props) {
  return (
    <div style={{
      minWidth: '180px',
      minHeight: '34px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }} {...props}>
      <img src="https://raw.githubusercontent.com/Anko-Server-project/website/photos/logos/logo.png" alt="アジ鯖のロゴ部分のアイコン" />
      <span style={{
        color: '#000000',
        fontSize: '1.4em',
        marginLeft: '8px',
      }}>あんこ鯖</span>
    </div>
  );
}
