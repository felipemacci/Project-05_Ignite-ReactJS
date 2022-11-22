var __defProp = Object.defineProperty;
var __defProps = Object.defineProperties;
var __getOwnPropDescs = Object.getOwnPropertyDescriptors;
var __getOwnPropSymbols = Object.getOwnPropertySymbols;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __propIsEnum = Object.prototype.propertyIsEnumerable;
var __defNormalProp = (obj, key, value) => key in obj ? __defProp(obj, key, { enumerable: true, configurable: true, writable: true, value }) : obj[key] = value;
var __spreadValues = (a, b) => {
  for (var prop in b || (b = {}))
    if (__hasOwnProp.call(b, prop))
      __defNormalProp(a, prop, b[prop]);
  if (__getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(b)) {
      if (__propIsEnum.call(b, prop))
        __defNormalProp(a, prop, b[prop]);
    }
  return a;
};
var __spreadProps = (a, b) => __defProps(a, __getOwnPropDescs(b));
var __objRest = (source, exclude) => {
  var target = {};
  for (var prop in source)
    if (__hasOwnProp.call(source, prop) && exclude.indexOf(prop) < 0)
      target[prop] = source[prop];
  if (source != null && __getOwnPropSymbols)
    for (var prop of __getOwnPropSymbols(source)) {
      if (exclude.indexOf(prop) < 0 && __propIsEnum.call(source, prop))
        target[prop] = source[prop];
    }
  return target;
};

// ../tokens/dist/index.mjs
var colors = {
  white: "#FFF",
  black: "#000",
  gray100: "#E1E1E6",
  gray200: "#A9A9B2",
  gray400: "#7C7C8A",
  gray500: "#505059",
  gray600: "#323238",
  gray700: "#29292E",
  gray800: "#202024",
  gray900: "#121214",
  ignite300: "#00B37E",
  ignite500: "#00875F",
  ignite700: "#015F43",
  ignite900: "#00291D",
  test: "#FFF"
};
var space = {
  1: "0.25rem",
  2: "0.5rem",
  3: "0.75rem",
  4: "1rem",
  5: "1.25rem",
  6: "1.5rem",
  7: "1.75rem",
  8: "2rem",
  10: "2.5rem",
  12: "3rem",
  16: "4rem",
  20: "5rem",
  40: "10rem",
  64: "16rem",
  80: "20rem"
};
var radii = {
  px: "1px",
  xs: "4px",
  sm: "6px",
  md: "8px",
  lg: "16px",
  full: "50%"
};
var fonts = {
  default: "Roboto, sans-serif",
  code: "monospace"
};
var fontSizes = {
  xxs: "0.625rem",
  xs: "0.75rem",
  sm: "0.875rem",
  md: "1rem",
  lg: "1.125rem",
  xl: "1.25rem",
  "2xl": "1.5rem",
  "4xl": "2rem",
  "5xl": "2.25rem",
  "6xl": "3rem",
  "7xl": "4rem",
  "8xl": "4.5rem",
  "9xl": "6rem"
};
var fontWeights = {
  regular: "400",
  medium: "500",
  bold: "700"
};
var lineHeights = {
  shorter: "125%",
  short: "140%",
  base: "160%",
  tall: "180%"
};

// src/styles/index.ts
import { createStitches, defaultThemeMap } from "@stitches/react";
var {
  styled,
  css,
  globalCss,
  keyframes,
  getCssText,
  theme,
  createTheme,
  config
} = createStitches({
  theme: {
    colors,
    fontSizes,
    fontWeights,
    fonts,
    lineHeights,
    radii,
    space
  },
  themeMap: __spreadProps(__spreadValues({}, defaultThemeMap), {
    width: "space",
    height: "space"
  })
});

// src/components/Box.tsx
var Box = styled("div", {
  padding: "$4",
  boxSizing: "border-box",
  backgroundColor: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$md"
});
Box.displayName = "Box";

// src/components/Text.tsx
var Text = styled("p", {
  margin: 0,
  fontFamily: "$default",
  lineHeight: "$base",
  color: "$gray100",
  variants: {
    size: {
      xxs: { fontSize: "$xxs" },
      xs: { fontSize: "$xs" },
      sm: { fontSize: "$sm" },
      md: { fontSize: "$md" },
      lg: { fontSize: "$lg" },
      xl: { fontSize: "$xl" },
      "2xl": { fontSize: "$2xl" },
      "4xl": { fontSize: "$4xl" },
      "5xl": { fontSize: "$5xl" },
      "6xl": { fontSize: "$6xl" },
      "7xl": { fontSize: "$7xl" },
      "8xl": { fontSize: "$8xl" },
      "9xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Text.displayName = "Text";

// src/components/Heading.tsx
var Heading = styled("h2", {
  margin: 0,
  fontFamily: "$default",
  lineHeight: "$shorter",
  color: "$gray100",
  variants: {
    size: {
      sm: { fontSize: "$xl" },
      md: { fontSize: "$2xl" },
      lg: { fontSize: "$4xl" },
      "2xl": { fontSize: "$5xl" },
      "3xl": { fontSize: "$6xl" },
      "4xl": { fontSize: "$7xl" },
      "5xl": { fontSize: "$8xl" },
      "6xl": { fontSize: "$9xl" }
    }
  },
  defaultVariants: {
    size: "md"
  }
});
Heading.displayName = "Heading";

// src/components/Avatar/styles.ts
import * as Avatar from "@radix-ui/react-avatar";
var AvatarContainer = styled(Avatar.Root, {
  display: "inline-block",
  width: "$12",
  height: "$12",
  borderRadius: "$full",
  overflow: "hidden"
});
var AvatarImage = styled(Avatar.Image, {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  border: "inherit"
});
var AvatarFallback = styled(Avatar.Fallback, {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "100%",
  height: "100%",
  color: "$gray800",
  backgroundColor: "$gray600",
  svg: {
    width: "$6",
    height: "$6"
  }
});

// src/components/Avatar/index.tsx
import { User } from "phosphor-react";
import { jsx, jsxs } from "react/jsx-runtime";
function Avatar2(props) {
  return /* @__PURE__ */ jsxs(AvatarContainer, {
    children: [
      /* @__PURE__ */ jsx(AvatarImage, __spreadValues({}, props)),
      /* @__PURE__ */ jsx(AvatarFallback, {
        delayMs: 600,
        children: /* @__PURE__ */ jsx(User, {})
      })
    ]
  });
}
Avatar2.displayName = "Avatar";

// src/components/Button.tsx
var Button = styled("button", {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "$2",
  minWidth: 120,
  padding: "0 4",
  boxSizing: "border-box",
  textAlign: "center",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$md",
  borderRadius: "$sm",
  cursor: "pointer",
  "&:disabled": {
    cursor: "not-allowed"
  },
  svg: {
    width: "$4",
    height: "$4"
  },
  variants: {
    variant: {
      primary: {
        color: "$white",
        background: "$ignite500",
        "&:not(:disabled):hover": {
          background: "$ignite300"
        },
        "&:disabled": {
          background: "$gray200"
        }
      },
      secondary: {
        color: "$ignite300",
        border: "2px solid $ignite500",
        "&:not(:disabled):hover": {
          color: "$white",
          background: "$ignite500"
        },
        "&:disabled": {
          color: "$gray200",
          borderColor: "$gray200"
        }
      },
      tertiary: {
        color: "$gray100",
        "&:not(:disabled):hover": {
          color: "$white"
        },
        "&:disabled": {
          color: "$gray600"
        }
      }
    },
    size: {
      sm: {
        height: 38
      },
      md: {
        height: 46
      }
    }
  },
  defaultVariants: {
    variant: "primary",
    size: "md"
  }
});
Button.displayName = "Button";

// src/components/TextInput/styles.ts
var TextInputContainer = styled("div", {
  display: "flex",
  alignItems: "baseline",
  padding: "$3 $4",
  boxSizing: "border-box",
  background: "$gray900",
  border: "2px solid $gray900",
  borderRadius: "$sm",
  "&:has(input:focus)": {
    borderColor: "$ignite300"
  },
  "&:has(input:disabled)": {
    opacity: 0.5,
    cursor: "not-allowed"
  }
});
var Prefix = styled("span", {
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  color: "$gray400"
});
var Input = styled("input", {
  width: "100%",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  color: "$white",
  background: "none",
  border: "none",
  "&:focus": {
    outline: "none"
  },
  "&:disabled": {
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});

// src/components/TextInput/index.tsx
import { jsx as jsx2, jsxs as jsxs2 } from "react/jsx-runtime";
function TextInput(_a) {
  var _b = _a, { prefix } = _b, props = __objRest(_b, ["prefix"]);
  return /* @__PURE__ */ jsxs2(TextInputContainer, {
    children: [
      !!prefix && /* @__PURE__ */ jsx2(Prefix, {
        children: prefix
      }),
      /* @__PURE__ */ jsx2(Input, __spreadValues({}, props))
    ]
  });
}
TextInput.displayName = "TextInput";

// src/components/TextArea.tsx
var TextArea = styled("textarea", {
  minHeight: 80,
  padding: "$3 $4",
  boxSizing: "border-box",
  fontFamily: "$default",
  fontSize: "$sm",
  fontWeight: "$regular",
  color: "$white",
  background: "$gray900",
  resize: "vertical",
  border: "2px solid $gray900",
  borderRadius: "$sm",
  "&:focus": {
    borderColor: "$ignite300",
    outline: "none"
  },
  "&:disabled": {
    opacity: 0.5,
    cursor: "not-allowed"
  },
  "&::placeholder": {
    color: "$gray400"
  }
});
TextArea.displayName = "TextArea";

// src/components/Checkbox/index.tsx
import { Check } from "phosphor-react";

// src/components/Checkbox/styles.ts
import * as Checkbox from "@radix-ui/react-checkbox";
var CheckboxContainer = styled(Checkbox.Root, {
  all: "unset",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  width: "$6",
  height: "$6",
  boxSizing: "border-box",
  lineHeight: 0,
  overflow: "hidden",
  background: "$gray900",
  border: "2px solid $gray900",
  borderRadius: "$xs",
  cursor: "pointer",
  '&[data-state="checked"]': {
    background: "$ignite300"
  },
  "&:focus": {
    border: "2px solid $ignite300"
  }
});
var slideIn = keyframes({
  from: {
    transform: "translateY(-100%)"
  },
  to: {
    transform: "translateY(0)"
  }
});
var slideOut = keyframes({
  from: {
    transform: "translateY(0)"
  },
  to: {
    transform: "translateY(-100%)"
  }
});
var CheckboxIndicator = styled(Checkbox.Indicator, {
  width: "$4",
  height: "$4",
  color: "$white",
  '&[data-state="checked"]': {
    animation: `${slideIn} 200ms ease-out`
  },
  '&[data-state="unchecked"]': {
    animation: `${slideOut} 200ms ease-out`
  }
});

// src/components/Checkbox/index.tsx
import { jsx as jsx3 } from "react/jsx-runtime";
function Checkbox2(props) {
  return /* @__PURE__ */ jsx3(CheckboxContainer, __spreadProps(__spreadValues({}, props), {
    children: /* @__PURE__ */ jsx3(CheckboxIndicator, {
      asChild: true,
      children: /* @__PURE__ */ jsx3(Check, {
        weight: "bold"
      })
    })
  }));
}
Checkbox2.displayName = "Checkbox";

// src/components/MultiStep/styles.ts
var MultiStepContainer = styled("div", {});
var Label = styled(Text, {
  color: "$gray200",
  defaultVariants: {
    size: "xs"
  }
});
var Steps = styled("div", {
  display: "grid",
  gridTemplateColumns: "repeat(var(--steps-size), 1fr)",
  gap: "$2",
  marginTop: "$1"
});
var Step = styled("div", {
  height: "$1",
  background: "$gray600",
  borderRadius: "$px",
  variants: {
    active: {
      true: {
        background: "$gray100"
      }
    }
  }
});

// src/components/MultiStep/index.tsx
import { jsx as jsx4, jsxs as jsxs3 } from "react/jsx-runtime";
function MultiStep({ size, currentStep = 1 }) {
  return /* @__PURE__ */ jsxs3(MultiStepContainer, {
    children: [
      /* @__PURE__ */ jsxs3(Label, {
        children: [
          "Step ",
          currentStep,
          " of ",
          size
        ]
      }),
      /* @__PURE__ */ jsx4(Steps, {
        css: { "--steps-size": size },
        children: Array.from({ length: size }, (_, i) => i + 1).map((step) => {
          return /* @__PURE__ */ jsx4(Step, {
            active: currentStep >= step
          }, step);
        })
      })
    ]
  });
}
MultiStep.displayName = "MultiStep";

// src/components/Tooltip/index.tsx
import * as TooltipElement from "@radix-ui/react-tooltip";

// src/components/Tooltip/styles.ts
import * as Tooltip from "@radix-ui/react-tooltip";
var TooltipContent = styled(Tooltip.Content, {
  display: "inline-block",
  maxWidth: 320,
  marginBottom: "$3",
  padding: "$3 $4",
  position: "relative",
  textAlign: "center",
  wordBreak: "break-word",
  fontFamily: "$default",
  fontSize: "$sm",
  color: "$gray100",
  background: "$gray900",
  borderRadius: "$sm",
  filter: "drop-shadow(4px 16px 24px rgba(0, 0, 0, 0.25))",
  "&::after": {
    display: "inline-block",
    width: "$4",
    height: "$2",
    position: "absolute",
    left: "50%",
    bottom: "-$2",
    transform: "translateX(-50%)",
    content: "",
    background: "inherit",
    clipPath: "polygon(0% 0%, 50% 100%, 100% 0%)"
  }
});

// src/components/Tooltip/index.tsx
import { jsx as jsx5, jsxs as jsxs4 } from "react/jsx-runtime";
function Tooltip2(_a) {
  var _b = _a, { content, children } = _b, props = __objRest(_b, ["content", "children"]);
  return /* @__PURE__ */ jsx5(TooltipElement.Provider, {
    children: /* @__PURE__ */ jsxs4(TooltipElement.Root, __spreadProps(__spreadValues({}, props), {
      children: [
        /* @__PURE__ */ jsx5(TooltipElement.Trigger, {
          asChild: true,
          children
        }),
        /* @__PURE__ */ jsx5(TooltipElement.Portal, {
          children: /* @__PURE__ */ jsx5(TooltipContent, {
            children: content
          })
        })
      ]
    }))
  });
}
Tooltip2.displayName = "Tooltip";

// src/components/Toast/index.tsx
import * as ToastElement from "@radix-ui/react-toast";
import { X } from "phosphor-react";

// src/components/Toast/styles.ts
import * as Toast from "@radix-ui/react-toast";
var VIEWPORT_PADDING = 25;
var hide = keyframes({
  "0%": { opacity: 1 },
  "100%": { opacity: 0 }
});
var slideIn2 = keyframes({
  from: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` },
  to: { transform: "translateX(0)" }
});
var swipeOut = keyframes({
  from: { transform: "translateX(var(--radix-toast-swipe-end-x))" },
  to: { transform: `translateX(calc(100% + ${VIEWPORT_PADDING}px))` }
});
var ToastViewport = styled(Toast.Viewport, {
  position: "fixed",
  bottom: 0,
  right: 0,
  display: "flex",
  flexDirection: "column",
  padding: VIEWPORT_PADDING,
  gap: 10,
  width: 390,
  maxWidth: "100vw",
  margin: 0,
  listStyle: "none",
  zIndex: 2147483647,
  outline: "none"
});
var ToastRoot = styled(Toast.Root, {
  display: "grid",
  gridTemplateAreas: '"title close" "description close"',
  gridTemplateColumns: "auto max-content",
  width: 360,
  padding: "$3 $5",
  boxSizing: "border-box",
  background: "$gray800",
  border: "1px solid $gray600",
  borderRadius: "$sm",
  "@media (prefers-reduced-motion: no-preference)": {
    '&[data-state="open"]': {
      animation: `${slideIn2} 150ms cubic-bezier(0.16, 1, 0.3, 1)`
    },
    '&[data-state="closed"]': {
      animation: `${hide} 100ms ease-in`
    },
    '&[data-swipe="move"]': {
      transform: "translateX(var(--radix-toast-swipe-move-x))"
    },
    '&[data-swipe="cancel"]': {
      transform: "translateX(0)",
      transition: "transform 200ms ease-out"
    },
    '&[data-swipe="end"]': {
      animation: `${swipeOut} 100ms ease-out`
    }
  }
});
var ToastTitle = styled(Toast.Title, {
  gridArea: "title",
  lineHeight: "$base",
  color: "$gray100"
});
var ToastDescription = styled(Toast.Description, {
  gridArea: "description",
  marginTop: "$1",
  lineHeight: "$base",
  color: "$gray200"
});
var ToastClose = styled(Toast.Close, {
  gridArea: "close",
  width: "$5",
  height: "$5",
  color: "$gray200",
  cursor: "pointer",
  "&:hover": {
    color: "$gray100"
  }
});

// src/components/Toast/index.tsx
import { jsx as jsx6, jsxs as jsxs5 } from "react/jsx-runtime";
function Toast2(_a) {
  var _b = _a, { title, description } = _b, props = __objRest(_b, ["title", "description"]);
  return /* @__PURE__ */ jsxs5(ToastElement.Provider, {
    swipeDirection: "right",
    children: [
      /* @__PURE__ */ jsxs5(ToastRoot, __spreadProps(__spreadValues({}, props), {
        children: [
          /* @__PURE__ */ jsx6(ToastTitle, {
            asChild: true,
            children: /* @__PURE__ */ jsx6(Heading, {
              size: "sm",
              children: title
            })
          }),
          /* @__PURE__ */ jsx6(ToastClose, {
            asChild: true,
            children: /* @__PURE__ */ jsx6(X, {
              weight: "bold"
            })
          }),
          !!description && /* @__PURE__ */ jsx6(ToastDescription, {
            asChild: true,
            children: /* @__PURE__ */ jsx6(Text, {
              size: "sm",
              children: description
            })
          })
        ]
      })),
      /* @__PURE__ */ jsx6(ToastViewport, {})
    ]
  });
}
export {
  Avatar2 as Avatar,
  Box,
  Button,
  Checkbox2 as Checkbox,
  Heading,
  MultiStep,
  Text,
  TextArea,
  TextInput,
  Toast2 as Toast,
  Tooltip2 as Tooltip
};
