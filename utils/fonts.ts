import localFont from 'next/font/local'

export interface Font {
  className?: string;
  fontWeight: number;
  fontSize: number;
}

export const customFonts = localFont({
  src: [
    {
      path: "./fonts/Merriweather.ttf",
      weight: "300",
    },
  ],
});

export interface Fonts {
  T1: {
    T48px: {
      Regular: Font;
      Bold: Font;
    };
    T40px: {
      Regular: Font;
      Bold: Font;
    };
    T32px: {
      Regular: Font;
      Bold: Font;
    };
    T24px: {
      Regular: Font;
      Bold: Font;
    };
    T20px: {
      Regular: Font;
      Bold: Font;
    };
    T16px: {
      Book: Font;
      Regular: Font;
      Bold: Font;
    };
    T14px: {
      Book: Font;
      Regular: Font;
      Bold: Font;
    };
    T12px: {
      Book: Font;
      Regular: Font;
      Bold: Font;
    };
    T10px: {
      Book: Font;
      Regular: Font;
      Bold: Font;
    };
  };
}

const fonts: Fonts = {
  T1: {
    T48px: {
      Regular: {
        className: customFonts.className,
        fontWeight: 400,
        fontSize: 48,
      },
      Bold: {
        className: customFonts.className,
        fontWeight: 1000,
        fontSize: 48,
      },
    },
    T40px: {
      Regular: {
        className: customFonts.className,
        fontWeight: 400,
        fontSize: 40,
      },
      Bold: {
        className: customFonts.className,
        fontWeight: 1000,
        fontSize: 40,
      },
    },
    T32px: {
      Regular: {
        className: customFonts.className,
        fontWeight: 400,
        fontSize: 32,
      },
      Bold: {
        className: customFonts.className,
        fontWeight: 1000,
        fontSize: 32,
      },
    },
    T24px: {
      Regular: {
        className: customFonts.className,
        fontWeight: 400,
        fontSize: 24,
      },
      Bold: {
        className: customFonts.className,
        fontWeight: 1000,
        fontSize: 24,
      },
    },
    T20px: {
      Regular: {
        className: customFonts.className,
        fontWeight: 400,
        fontSize: 20,
      },
      Bold: {
        className: customFonts.className,
        fontWeight: 1000,
        fontSize: 20,
      },
    },
    T16px: {
      Book: {
        className: customFonts.className,
        fontWeight: 300,
        fontSize: 16,
      },
      Regular: {
        className: customFonts.className,
        fontWeight: 400,
        fontSize: 16,
      },
      Bold: {
        className: customFonts.className,
        fontWeight: 1000,
        fontSize: 16,
      },
    },
    T14px: {
      Book: {
        className: customFonts.className,
        fontWeight: 300,
        fontSize: 14,
      },
      Regular: {
        className: customFonts.className,
        fontWeight: 400,
        fontSize: 14,
      },
      Bold: {
        className: customFonts.className,
        fontWeight: 500,
        fontSize: 14,
      },
      
    },
    T12px: {
      Book: {
        className: customFonts.className,
        fontWeight: 300,
        fontSize: 12,
      },
      Regular: {
        className: customFonts.className,
        fontWeight: 400,
        fontSize: 12,
      },
      Bold: {
        className: customFonts.className,
        fontWeight: 1000,
        fontSize: 12,
      },
    },
    T10px: {
      Book: {
        className: customFonts.className,
        fontWeight: 300,
        fontSize: 10,
      },
      Regular: {
        className: customFonts.className,
        fontWeight: 400,
        fontSize: 10,
      },
      Bold: {
        className: customFonts.className,
        fontWeight: 1000,
        fontSize: 10,
      },
    },
  },
};

export default fonts;
