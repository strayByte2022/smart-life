import React from 'react'
import { GetUserInfoReturns } from "zmp-sdk";
import { Avatar} from "zmp-ui";
interface UserProps {
    user: GetUserInfoReturns["userInfo"];
}

const UserAvatar: React.FunctionComponent<UserProps> = ({ user }) => {
    return (
        <Avatar
            story="default"
            online
            src={user.avatar.startsWith("http") ? user.avatar : undefined}
        >
            {user.avatar}
        </Avatar>
    )
}

export default UserAvatar