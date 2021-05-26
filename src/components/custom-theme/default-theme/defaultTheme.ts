import { defaultThemeInterface } from '../interfaces/defaultTheme.interface'

export const defaultTheme: defaultThemeInterface = {
  generalColors: {
    primary: '#FFD000',
    secondary: '#1A1446',
    tertiary: '#28A3AF',
    success: '#A5F2F1',
    warning: '#FFE571',
    danger: '#FF0000',
    light: '#FFFFFF',
    disabled: '#F1F1F1',
  },
  components: {
    button: {
      types: {
        basic: {
          regular: '#FFFFFF',
          hover: '',
          contrast: '#28A3AF',
          shade: 'inset 0px 2px 3px 0px rgba(207,207,207,1)',
          tint: '#28A3AF',
          shadeTint: '0px 3px 2px rgba(150, 150, 150, 0.57)',
        },
        primary: {
          regular: '#28A3AF',
          hover: '',
          contrast: '#FFFFFF',
          shade: '0px 2px 3px 0px rgba(200,200,200,0.75)',
          tint: '#FFFFFF',
          shadeTint: '',
        },
        secondary: {
          regular: '#FFFFFF',
          hover: '',
          contrast: '#28A3AF',
          shade: 'inset 0px 2px 3px 0px rgba(207,207,207,1)',
          tint: '#1A1446',
          shadeTint: '0px 3px 2px rgba(150, 150, 150, 0.57)',
        },
        accent: {
          regular: '#A5F2F1',
          hover: '',
          contrast: '#28A3AF',
          shade: '0px 2px 3px 0px rgba(200,200,200,0.75)',
          tint: '#1A1446',
          shadeTint: '',
        },
        warn: {
          regular: '#FFFFFF',
          hover: '',
          contrast: '#FF0000',
          shade: 'inset 0px 2px 3px 0px rgba(207,207,207,1);',
          tint: '#FF0000',
          shadeTint: '0px 3px 2px rgba(150, 150, 150, 0.57)',
        },
        disabled: {
          regular: '#F1F1F1',
          hover: '',
          contrast: '#1A1446',
          shade: '0px 2px 3px 0px rgba(200,200,200,0.75)',
          tint: '#1A1446',
          shadeTint: '',
        },
      },
      properties: {
        borderRadius: '20px',
        fontSize: '15px',
      },
    },
  },
}
