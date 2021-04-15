import React from "react";
import {connect} from "react-redux";
import
{
    setCurrentPage,
    toggleIsFollowingProgress,
    getUsersThunk, followThunk, unFollowThunk
}
    from "../../redux/users-reducer";
import Users from "./Users";
import Preloader from "../common/Preloader/Preloader";
import {withAuthRedirect} from "../../hoc/withAuthRedirect";
import {compose} from "redux";
import {
    getCurrentPage,
    getFollowingProgress,
    getIsFetching,
    getPageSize,
    getTotalUsersCount,
    getUsers
} from "../../redux/users-selectors";


class UsersContainer extends React.Component {

    componentDidMount() {
        const {currentPage, pageSize} = this.props;
        this.props.getUsersThunk(currentPage, pageSize);
    }

    onPageChanged = (pageNumber) => {
        const {pageSize} = this.props;
        this.props.getUsersThunk(pageNumber, pageSize);
    };


    render() {
        return <>
            {this.props.isFetching ? <Preloader/> : null}
                 <Users totalUsersCount={this.props.totalUsersCount}
                         pageSize={this.props.pageSize}
                         currentPage={this.props.currentPage}
                         onPageChanged={this.onPageChanged}
                         users={this.props.users}
                         followingProgress={this.props.followingProgress}
                         followThunk={this.props.followThunk}
                         unFollowThunk={this.props.unFollowThunk}
                />
        </>
    }
}


const mapStateToProps = (state) => {
    return {
        users: getUsers(state),
        pageSize: getPageSize(state),
        totalUsersCount: getTotalUsersCount(state),
        currentPage: getCurrentPage(state),
        isFetching: getIsFetching(state),
        followingProgress: getFollowingProgress(state),
    }
};


const mapDispatchToProps = {
        setCurrentPage,
        toggleIsFollowingProgress,
        getUsersThunk,
        followThunk, unFollowThunk
};


export default compose(connect(mapStateToProps, mapDispatchToProps), withAuthRedirect)(UsersContainer);

