import { AxiosError, AxiosResponse } from "axios";

export const isErrorWithMessage = (
    error: unknown
): error is { data: { message: string } } => {
    return (
        typeof error === "object" &&
        error !== null &&
        "data" in error &&
        "message" in (error as { data: { message: string } }).data
    );
};
export const isAxiosErrorResponse = (
    error: any
): error is AxiosResponse<AxiosError> => {
    return error instanceof AxiosError;
};

export function toAxiosError(error: any): AxiosError {
    return new AxiosError(
        error.message,
        error.config,
        error.code,
        error.request,
        error.response
    );
}
