export const lolLeftPad = (number, targetLength: number) => {
    let output: string = (number += "");
    while (output.length < targetLength) {
        output = "0" + output;
    }
    return output;
};
