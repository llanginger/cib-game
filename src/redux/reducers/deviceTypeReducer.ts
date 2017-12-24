export interface IDeviceTypeReducer {
    deviceType: string
}

const initState: IDeviceTypeReducer = { deviceType: "iPhone" }
export const deviceTypeReducer = (state: IDeviceTypeReducer = initState, action: any) => {
    switch (action.type) {

        case "SET_DEVICE_TYPE":
        case "INIT_APP":
            return {
                ...state,
                deviceType: action.payload.deviceType
            }
        default: return state
    }
}