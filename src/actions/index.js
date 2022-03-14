import _ from 'lodash';
import jsonPlaceholder from "../apis/jsonPlaceholder"; //Api'den gelen verilerden action yaratmak için import ettik.


export const fetchPostsAndUsers = () => async (dispatch, getState) => { 
   await dispatch(fetchPosts());
   const userIds = _.uniq(_.map(getState().posts, 'userId'));
   userIds.forEach(id => dispatch (fetchUser(id)));
 }; // bu action'da elde olan actionları birleştirdik ve tek action haline getirdik. 



export const fetchPosts = () =>  async  dispatch =>
 {
    const response =  await jsonPlaceholder.get('/posts');

    dispatch({type: 'FETCH_POSTS', payload : response.data});
 }; // bu sorgu bize api'dan postları gönderecek


 export const fetchUser = (id) => async dispatch => {
   const response = await jsonPlaceholder.get(`/users/${id}`);

   dispatch({type: 'FETCH_USER' , payload :  response.data});
}; // APİ'DAN sorgu at ve id numarasına göre veri gönder dedik. 



 
 /* export const fetchUser = (id) => async dispatch => {
    const response = await jsonPlaceholder.get(`/users/${id}`);

    dispatch({type: 'FETCH_USER' , payload :  response.data});
 };
  // bu sorgu bize api'dan İSTEDİĞİMİZ useri gönderecek.

 // Middleware şeklinde kullandık galiba. Redux-thunku oku. veriyi buradan actiona sokuyoz.

 */



  /* export const fetchUser = id => dispatch => _fetchUser(id,dispatch);
 const _fetchUser = _.memoize(async (id, dispatch) => {
    const response = await jsonPlaceholder.get(`/users/${id}`);
    dispatch({ type : 'FETCH_USER', payload : response.data})
 }); 
 // Bu yöntem sayesinde her postun yazarını tekrardan istek atıp almak yerine sadece bir kez çağırıp hafızaya kaydettik ve eğer yazar == yazar durumu oluşursa memoize'dan yazar bilgisi geliyor. Bu tekrar tekrar APİ'den istek almamızın önüne geçiyor. 
 */


 // export const fetchPostsAndUsers = () => async dispatch =>{
//    console.log('About to fetch posts');
//    await dispatch(fetchPosts());
//    console.log('fetched posts!');
// } -- OLD VERSİON
