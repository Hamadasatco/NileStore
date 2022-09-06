import { ActionType, DataType } from "./Types";
import { data as phData } from "./PlaceholderData";

export const LoadData = (dataType) => ({
    type: ActionType.DATA_LOAD,
    payload: {
        dataType: dataType,
        data: phData[dataType]
    }
});