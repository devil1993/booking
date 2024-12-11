import {INotificationService, NotificationConfig} from "../NotificationService.ts";
import {toast, ToastPosition, Zoom} from "react-toastify";

export class ToastifyNotificationService implements INotificationService {
    private postition: ToastPosition = "bottom-center";
    private autoCloseInterval: number = 10000;
    notify(message: string, config: NotificationConfig = {} as NotificationConfig): void {
        toast(message, {
            position: this.postition,
            autoClose: config.autoClose ? (config.closeDelay ? config.closeDelay : this.autoCloseInterval) : config.autoClose,
            closeOnClick: config.closeOnClick,
            transition: Zoom,
            closeButton: false,
            type: "info"
        });
    }
    notifyError(message: string, config: NotificationConfig): void {
        console.debug("ToastifyNotificationService.notifyWarning: config is ignored - ", config);
        toast(message, {
            position: this.postition,
            autoClose: false,
            closeOnClick: false,
            transition: Zoom,
            closeButton: true,
            type: "error"
        });
    }
    notifyWarning(message: string, config: NotificationConfig): void {
        console.debug("ToastifyNotificationService.notifyWarning: config is ignored - ", config);
        toast(message, {
            position: this.postition,
            autoClose: false,
            closeOnClick: false,
            transition: Zoom,
            closeButton: true,
            type: "warning"
        });
    }
}