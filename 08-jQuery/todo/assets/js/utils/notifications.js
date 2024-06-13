
export const notificationSuccess = (message)  => {
    toastr.success(null, message, {
        closeButton: true,
        positionClass: "toast-bottom-right"
    });
}

export const notificationError = (message)  => {
    toastr.error(null, message, {
        closeButton: true,
        positionClass: "toast-bottom-right"
    });
}