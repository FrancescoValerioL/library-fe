import { Slide, toast } from "react-toastify"


export function errorToast(text: string, theme: string, delay: number) {
    return (
        toast.error(text, {
            position: "top-center",
            autoClose: delay,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
            transition: Slide,
        }))
}

export function defaultToast(text: string, theme: string, delay: number) {
    return (
        toast.info(text, {
            position: "top-center",
            autoClose: delay,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
            transition: Slide,
        }))
}

export function successToast(text: string, theme: string, delay: number) {
    return (
        toast.success(text, {
            position: "top-center",
            autoClose: delay,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
            transition: Slide,
        }))
}

export function warningToast(text: string, theme: string, delay: number) {
    return (
        toast.info(text, {
            position: "top-center",
            autoClose: delay,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            progress: undefined,
            theme: theme,
            transition: Slide,
        }))
}