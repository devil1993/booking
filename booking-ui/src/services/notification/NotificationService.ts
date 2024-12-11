export interface NotificationConfig {
    autoClose: boolean | undefined;
    closeDelay: number | undefined;
    closeOnClick: boolean | undefined;
}

export interface INotificationService {
    notify(message: string, config: NotificationConfig): void;
    notifyError(message: string, config: NotificationConfig): void;
    notifyWarning(message: string, config: NotificationConfig): void;
}