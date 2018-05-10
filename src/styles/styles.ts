export interface IColors {
    lightBackground: string;
    blue: string;
    green: string;
    red: string;
    grey: string;
    buttonContainerBackground: string;
    imageContainerBackground: string;
}

export interface IShadowStyles {
    shadowColor: string;
    shadowOffset: { width: number; height: number };
    shadowRadius: number;
    shadowOpacity: number;
}

export interface IButtonBorder {
    borderColor: string;
    borderStyle: string;
    borderWidth: number;
    borderRadius: number;
}

const buttonBorder: IButtonBorder = {
    borderColor: "#776c79",
    borderStyle: "solid",
    borderWidth: 2,
    borderRadius: 10
};

const colors: IColors = {
    lightBackground: "#e4f5f9",
    blue: "#60b8ff",
    green: "#3eb929",
    red: "#F44336",
    grey: "#8f9091",
    buttonContainerBackground: "",
    imageContainerBackground: ""
};

const shadow: IShadowStyles = {
    shadowColor: "rgb(24, 23, 22)",
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 5,
    shadowOpacity: 0.3
};

export type IRockwellFont = string;
export type IHandDrawnFont = "Annie Use Your Telescope";
export interface IAppStyles {
    colors: IColors;
    shadow: IShadowStyles;
    buttonBorder: IButtonBorder;
    rockwellFont: IRockwellFont;
    handDrawnFont: IHandDrawnFont;
}
export const appStyles: IAppStyles = {
    colors,
    shadow,
    buttonBorder,
    rockwellFont: "Rockwell",
    handDrawnFont: "Annie Use Your Telescope"
};
