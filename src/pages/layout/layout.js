import React from 'react';
import { connect } from 'react-redux';
import styles from './layout.less';

class Layout extends React.Component{
    componentDidMount(){
        console.log(this.refs)
    }
    render(){
        
        return (
            <div className={styles.wrapper}>
                <div className={styles.header}>
                    <div className={styles.title}>
                        <img />
                        <span>个人中心</span>
                    </div>
                    <div className={styles.navMenu}>
                        
                    </div>
                </div>
                <div ref={ref=>this.refs = ref} className={styles.content}>
                    {this.props.children}
                </div>
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

export default connect(mapStateToProps)(Layout);