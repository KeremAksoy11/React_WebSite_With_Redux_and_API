import React from "react";
import { connect } from 'react-redux';
import {  fetchPostsAndUsers } from '../actions'
// Old Version - import { fetchPosts } from '../actions'
import UserHeader from "./UserHeader";

class PostList extends React.Component {
    componentDidMount() {
      this.props.fetchPostsAndUsers();
       // OLD VERSİON- this.props.fetchPosts();
    } // dışarıdan gelen isteği ekrana yansıtmak amaçlı didmount kullanılır.

    renderList() {
        return this.props.posts.map(post => {
          return (
            <div className="item" key={post.id}>
              <i className="large middle aligned icon user" />
              <div className="content">
                <div className="description">
                  <h2>{post.title}</h2>
                  <p>{post.body}</p>
                </div>
                <UserHeader userId = {post.userId}/>
              </div> 
            </div>
          );
        });
      }
    render() {
        return <div className="ui relaxed divided list">{this.renderList()}</div>;
    };
};


const mapStateToProps = (state) => {
    return { posts: state.posts };
}; // bağlı bileşenin ihtiyaç duyduğu mağazadan veri bölümünü seçmek için kullanılır. 
/* Bileşeninizi 'bağlamak' veya 'akıllı hale getirmek' olarak adlandırılır. Tasarım gereğidir.

Bileşeninizi durumunuzdan ek bir süre ayırmanıza izin verir, bu da kodunuzun modülerliğini artırır. Ayrıca, uygulama durumunuzun bir alt kümesi olarak bileşen durumunuzu basitleştirmenize olanak tanır ve bu aslında Redux modeline uymanıza yardımcı olur.

Bunu şu şekilde düşünün: Bir mağazanın uygulamanızın tüm durumunu içermesi gerekir.
Büyük uygulamalar için bu, birçok katmanın derinliklerine yerleştirilmiş düzinelerce özellik içerebilir.
Tüm bunları her aramada (pahalı) taşımak istemezsiniz.

mapStateToProps veya bunun bir analogu olmadan, durumunuzu performansı iyileştirmenin/basitleştirmenin başka bir yolunu bölmek için cazip olursunuz. */ 

// OLD VERSİON - export default connect(mapStateToProps, { fetchPosts })(PostList); 
export default connect(mapStateToProps, { fetchPostsAndUsers })(PostList); 