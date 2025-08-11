import {Fonts, Theme} from 'react-native-paper/lib/typescript/types'

export interface AppFonts extends Fonts {
  semiBold?: {
    fontFamily: string
    fontWeight?: string
  }
  bold?: {
    fontFamily: string
    fontWeight?: string
  }
}

export interface AppTheme extends Theme {
  colors: {
    primary: string
    background: string
    surface: string
    accent: string
    error: string
    text: string
    onSurface: string
    disabled: string
    placeholder: string
    backdrop: string
    notification: string

    danger: string
    success: string
    warning: string
    border: string
    icon: string
    inputBackground: string
    inputBorder: string
    textSecondary: string
  }
  fonts: AppFonts
}
