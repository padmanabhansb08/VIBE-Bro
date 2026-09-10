import React, { useState } from 'react';

/**
 * CardResize Component
 * Free transition component from Transitions.dev (Prototype 4)
 */
export const CardResize = ({ className = '', defaultSmall = false }) => {
  const [isSmall, setIsSmall] = useState(defaultSmall);

  return (
    <div className={`transitions-card-wrap ${className}`} style={styles.wrap}>
      <div
        className={`p4-card ${isSmall ? 'is-small' : ''}`}
        style={{
          ...styles.card,
          width: isSmall ? '154px' : '220px',
          height: isSmall ? '128px' : '112px',
        }}
        onClick={() => setIsSmall(prev => !prev)}
        role="button"
        tabIndex={0}
        aria-label="Toggle card size"
      >
        <div style={{ ...styles.sk, top: '14px', height: '10px', width: '52.6%' }} />
        <div style={{ ...styles.sk, top: '28px', height: '7px', left: '14px', right: '14px' }} />
        <div style={{ ...styles.sk, top: '39px', height: '7px', left: '14px', right: '14px' }} />
        <div style={{ ...styles.sk, top: '50px', height: '7px', width: '73.4%' }} />
        <div style={{ ...styles.sk, top: '78px', height: '7px', left: '14px', right: '14px' }} />
        <div style={{ ...styles.sk, top: '89px', height: '7px', left: '14px', right: '14px' }} />
      </div>

      <button
        type="button"
        style={styles.button}
        onClick={() => setIsSmall(prev => !prev)}
      >
        Animate
      </button>
    </div>
  );
};

const styles = {
  wrap: {
    display: 'inline-flex',
    flexDirection: 'column',
    alignItems: 'center',
    gap: '16px',
  },
  card: {
    position: 'relative',
    overflow: 'hidden',
    borderRadius: '12px',
    backgroundColor: 'var(--material-bg, #ffffff)',
    boxShadow: 'var(--material-shadow, 0 4px 42px 0 rgba(0,0,0,0.06), 0 2px 6px 0 rgba(0,0,0,0.05), 0 0 0 1px rgba(0,0,0,0.06))',
    transition: 'width 300ms cubic-bezier(0.22, 1, 0.36, 1), height 300ms cubic-bezier(0.22, 1, 0.36, 1)',
    cursor: 'pointer',
  },
  sk: {
    position: 'absolute',
    left: '14px',
    borderRadius: '4px',
    backgroundColor: 'var(--skeleton, #eeeeef)',
  },
  button: {
    padding: '8px 18px',
    borderRadius: '9999px',
    border: '1px solid rgba(125, 125, 125, 0.2)',
    background: 'transparent',
    color: 'inherit',
    fontSize: '13px',
    fontWeight: 500,
    cursor: 'pointer',
  }
};

export default CardResize;
