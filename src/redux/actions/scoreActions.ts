export type IUpdateScoreType = "hot" | "cool";

export const updateScore = (type: IUpdateScoreType) => {
    switch (type) {
        case "hot":
            return {
                type: "INCREMENT_HOT_SCORE"
            };
        case "cool":
            return {
                type: "INCREMENT_COOL_SCORE"
            };
        default:
            return { type: "error" };
    }
};
