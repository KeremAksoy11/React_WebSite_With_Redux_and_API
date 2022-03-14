import { combineReducers } from "redux";
import postsReducer from "./postsReducer"; 
import usersReducer from "./usersReducer"; // Çok fazla redüktörümüz olduğu için hepsini index.jsde tutamayız reducer dosyamızın içine bir post indükleyici redüktör daha yazdık ve onu da altta nesnenin içine atadık.

export default combineReducers({
    posts: postsReducer,
    users : usersReducer
});