import { defaultThemeInterface } from "../interfaces/defaultTheme.interface";

export const defaultTheme: defaultThemeInterface = {
  generalColors: {
    primary: "#FFD000",
    secondary: "#1A1446",
    tertiary: "#FFE571",
    success: "#A5F2F1",
    warning: "#28A3AF",
    danger: "#FF0000",
    light: "#FFFFFF",
    disabled: "#F1F1F1",
  },
  components: {
    button: {
      types: {
        basic: {
          regular: "#FFFFFF",
          hover: "",
          contrast: "#28A3AF",
          shade: "",
          tint: "#28A3AF",
        },
        primary: {
          regular: "#28A3AF",
          hover: "",
          contrast: "#FFFFFF",
          shade: "",
          tint: "#FFFFFF",
        },
        secondary: {
          regular: "#FFFFFF",
          hover: "",
          contrast: "#28A3AF",
          shade: "",
          tint: "#1A1446",
        },
        accent: {
          regular: "#A5F2F1",
          hover: "",
          contrast: "#28A3AF",
          shade: "",
          tint: "#1A1446",
        },
        warn: {
          regular: "#FFFFFF",
          hover: "",
          contrast: "#FF0000",
          shade: "",
          tint: "#FF0000",
        },
        disabled: {
          regular: "#F1F1F1",
          hover: "",
          contrast: "#1A1446",
          shade: "",
          tint: "#1A1446",
        },
      },
      properties: {
        borderRadius: "20px",
        fontSize: "15px",
      },
    },
  },
};
