/* eslint-disable import/no-anonymous-default-export */
export default (state = [], action) => {
    switch(action.type) {
        case  'FETCH_USER':
            return[...state, action.payload]; //Arrayimizin içine bir ekleme yaptığımız zaman kullanacağımız syntax bu.
            default:
                return state; // eğer arraye yeni bir şey eklenmezse elde olan arrayi dön.
    }
}

//Varsayılan fonksiyonu isimsiz olarak dışarı aktar.