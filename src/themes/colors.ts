// Swatch
export const COLORS = {
  WHITE: '#fff',
  OPACITY_WHITE: 'rgba(255, 255, 255, 0.75)',
  BLACK: '#000',
  OPACITY_BLACK: 'rgba(0, 0, 0, 0.5)',
  GREY_1: '#F4EEEE',
  GREY_2: '#DCDCDC',
  GREY_3: '#D9D9D9',
  GREY_4: '#BFBFBF',
  GREY_5: '#8C8C8C',
  GREY_6: '#3E3E3E',
  GREY_7: '#393939',
  GREY_TAB_LABEL: '#696969',
  GREY_PLACEHOLDER: '#A6A6A6',
  BLUE: '#455EFF',
  LIGHT_PURPLE: '#AA8BC6',
  PURPLE: '#5B58AD',
  SHADE_PURPLE: '#2B1C39',
  RED: 'red',
};

// Colors themes
export const LIGHT_COLORS = {
  BACKGROUND: COLORS.WHITE,
  OPACITY_BACKGROUND: COLORS.OPACITY_BLACK,
  FONT_COLOR: COLORS.PURPLE,
  ACTION_BUTTON_FONT: COLORS.WHITE,
  ACTION_BUTTON_BG: COLORS.PURPLE,
  SPACES_BACKGROUND: COLORS.GREY_1,
  BOX_INPUT_BACKGROUND: COLORS.WHITE,
  SPACE: COLORS.GREY_1,
  SHADOW: COLORS.BLACK,
  ICON_BACKGROUND: COLORS.GREY_3,
  // text
  PLACEHOLDER: COLORS.GREY_PLACEHOLDER,
  TEXT_BORDER_BOTTOM: COLORS.GREY_4,
  BOX_INPUT: COLORS.PURPLE,
  TEXT_LABEL: COLORS.GREY_7,
} as const;

export const DARK_COLORS = {
  BACKGROUND: COLORS.SHADE_PURPLE,
  OPACITY_BACKGROUND: COLORS.OPACITY_BLACK,
  FONT_COLOR: COLORS.WHITE,
  ACTION_BUTTON_FONT: COLORS.WHITE,
  ACTION_BUTTON_BG: COLORS.PURPLE,
  SPACES_BACKGROUND: COLORS.GREY_1,
  BOX_INPUT_BACKGROUND: COLORS.PURPLE,
  SPACE: COLORS.GREY_5,
  SHADOW: COLORS.WHITE,
  ICON_BACKGROUND: COLORS.GREY_4,
  // text
  PLACEHOLDER: COLORS.GREY_PLACEHOLDER,
  TEXT_BORDER_BOTTOM: COLORS.GREY_4,
  BOX_INPUT: COLORS.PURPLE,
  TEXT_LABEL: COLORS.GREY_1,
} as const;
