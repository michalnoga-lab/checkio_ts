export module FindMessage {
    export function findMessage(message: string): string {
        return message.replace(/[^A-Z]+/g, '');
    }
}
