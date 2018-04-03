export interface IColors {
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
    blue: "#60b8ff",
    green: "#3eb929",
    red: "#F44336",
    grey: "#8f9091",
    buttonContainerBackground: "",
    imageContainerBackground: ""
};

const shadow: IShadowStyles = {
    shadowColor: "rgb(24, 23, 22)",
    shadowOffset: { width: 0, height: 10 },
    shadowRadius: 5,
    shadowOpacity: 0.8
};

export type IFont = string;
export interface IAppStyles {
    colors: IColors;
    shadow: IShadowStyles;
    buttonBorder: IButtonBorder;
    font: IFont;
}
export const appStyles: IAppStyles = {
    colors,
    shadow,
    buttonBorder,
    font: "Rockwell"
};
