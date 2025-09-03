module.exports = {
    theme: {
      extend: {
        fontFamily: {
          inter: ['var(--font-inter)'],
          mono: ['var(--font-mono)'],
        },
        fontSize: {
          xs: ['var(--text-xs)', { lineHeight: 'var(--text-xs--line-height)' }],
          sm: ['var(--text-sm)', { lineHeight: 'var(--text-sm--line-height)' }],
          base: [
            'var(--text-base)', 
            { 
              lineHeight: 'var(--text-base--line-height)',
              letterSpacing: 'var(--text-base--letter-spacing)',
            }
          ],
          lg: [
            'var(--text-lg)', 
            { 
              lineHeight: 'var(--text-lg--line-height)',
              letterSpacing: 'var(--text-lg--letter-spacing)',
            }
          ],
          xl: ['var(--text-xl)'],
        },
      },
    },
  };
  