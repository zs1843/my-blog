import React from 'react';
import { connect } from 'react-redux';
import styles from './home.less';

class Home extends React.Component{
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