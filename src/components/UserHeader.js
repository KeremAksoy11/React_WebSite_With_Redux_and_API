import React from "react";
import { connect } from "react-redux";
 //  OLD VERSİON - import { fetchUser } from "../actions";


class UserHeader extends React.Component{
   /*  componentDidMount(){
        this.props.fetchUser(this.props.userId);
    } // Ekranda gösterilmesini istediğin veriyi getirdik.
 */ // - OLD VERSİON

    render(){
        const {user} = this.props;

        if(!user) {
            return <div>Yüklenecek</div>;
        } // eğer yazar ismi döndüremezsek bu yazıyı göster. 

        return <div className="header"> {user.name}</div>
    };
};


const mapStateToProps = (state, ownProps) => {
    return { user : state.users.find(user => user.id === ownProps.userId)}; // bu users.find ise userReducers'da yazıp index.js [reducers] users objesine atatdığımız userReducerdir. 
};

export default connect(mapStateToProps)(UserHeader);

// OLD VERSİON - export default connect(mapStateToProps, {fetchUser})(UserHeader); // !!! Bir hatayı burada yakaladın. fetchUser'da parantezleri unutmak hata sebebiyet verdi.