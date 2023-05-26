import axios, { AxiosResponse } from "axios";

import { User } from "@models/User";

export const userService = {
    async getUser(userId: number) {
        return await axios.get("https://jsonplaceholder.typicode.com/users", {
            params: {
                id: userId,
            },
        });
    },
};
