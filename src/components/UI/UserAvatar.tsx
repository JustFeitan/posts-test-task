import React, { FC } from "react";
import { Image, ImageProps } from "react-bootstrap";

interface UserAvatarProps extends ImageProps {
    image: string;
    size?: number;
}

const UserAvatar: FC<UserAvatarProps> = ({ image, size = 90, ...props }) => {
    const avatarSize = {
        height: size + "px",
        width: size + "px",
    };

    return (
        <Image
            className="p-0 mx-2"
            src={image}
            alt="avatar"
            roundedCircle
            {...props}
            style={avatarSize}
        />
    );
};

export default UserAvatar;
