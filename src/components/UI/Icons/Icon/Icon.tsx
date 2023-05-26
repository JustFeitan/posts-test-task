import React, { FC, JSX } from "react";

import { IconInterface } from "@models";

interface IconProps extends IconInterface {
    icon: JSX.Element;
}

const Icon: FC<IconProps> = ({ icon, size = 36, className, ...props }) => {
    const styles = {
        width: size + "px",
        height: size + "px",
    };
    return (
        <div style={styles} {...props}>
            {icon}
        </div>
    );
};

export default Icon;
