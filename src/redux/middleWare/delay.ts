interface Action {
    type: string;
    delay?: number;
}

export const delayMiddleWare = store => next => (action: Action) => {
    if (action.delay) {
        setTimeout(() => {
            return next(action);
        }, action.delay);
    } else {
        return next(action);
    }
};
