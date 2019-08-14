import React from 'react';
import { connect } from 'react-redux';
import styles from './home.less';
import http from "@/utils/http"; 

class Home extends React.Component{

    componentDidMount(){
        
    }

    render(){
        
        return (
            <div className={styles.red1}>
                eqeq
            </div>
        )
    }
}

const mapStateToProps = (state, ownProps) =>{
    return state;
}
// const mapDispatchToProps = (dispatch, ownProps)=>{
//     return bindActionCreators({createSagaAction1, createSagaAction2}, dispatch);
// }

export default connect(mapStateToProps)(Home);