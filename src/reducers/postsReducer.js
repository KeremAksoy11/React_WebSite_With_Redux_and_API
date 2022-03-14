// eslint-disable-next-line import/no-anonymous-default-export
export default (state = [], action) => {
    switch (action.type) {
        case 'FETCH_POSTS':
            return action.payload; // post eklemelerini döndür 
        default:
            return state; // post eklemesi yoksa mevcut arrrayi döndür.
    }
};
//Ana reducerse fazla yüklenme olmasın diye yeni reducers yazıp index.js için import edeceğiz.