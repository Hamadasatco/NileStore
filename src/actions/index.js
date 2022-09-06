let id =1;
export function uniqueId() {
    id++;
    return '_'+id;
}

export function createTask({ title, description }) {
    return {
        type: 'CREATE_TASK',
        payload: {
            id: uniqueId(),
            title,
            description,
            status: 'Unstarted',
        },
    };
}

export function editTask(id, params = {}) {
    return {
        type: 'EDIT_TASK',
        payload: {
            id,
            params
        }
    };
}