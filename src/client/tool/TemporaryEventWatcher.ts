export default class TemporaryEventWatcher {
    public static watchDocument(actionEvent: string, endEvent: string, eventWorker: (e: Event) => void, endEventWorker: (e: Event) => void): void {
        TemporaryEventWatcher.watch(document, actionEvent, endEvent, eventWorker, endEventWorker);
    }

    public static watch(target: HTMLElement | Document, actionEvent: string, endEvent: string, eventWorker: (e: Event) => void, endEventWorker: (e: Event) => void): void {
        target.addEventListener(actionEvent, eventWorker);
        const endEventRegistree = (e) => {
            endEventWorker(e);
            target.removeEventListener(actionEvent, eventWorker);
            target.removeEventListener(endEvent, endEventWorker);
        };
        target.addEventListener(endEvent, endEventRegistree);
    }
}
