import { Message } from './message';
import { WebROptions } from '../webr-main';
import { ChannelMain } from './channel';
export declare class PostMessageChannelMain extends ChannelMain {
    #private;
    initialised: Promise<unknown>;
    resolve: (_?: unknown) => void;
    reject: (message: string | Error) => void;
    close: ChannelMain['close'];
    emit: ChannelMain['emit'];
    constructor(config: Required<WebROptions>);
    interrupt(): void;
}
export declare class PostMessageChannelWorker {
    #private;
    constructor();
    resolve(): void;
    write(msg: Message, transfer?: [Transferable]): void;
    writeSystem(msg: Message, transfer?: [Transferable]): void;
    read(): Message;
    inputOrDispatch(): number;
    run(_args: string[]): void;
    setDispatchHandler(dispatch: (msg: Message) => void): void;
    protected request(msg: Message, transferables?: [Transferable]): Promise<Message>;
    syncRequest(): Message;
    setInterrupt(): void;
    handleEvents(): void;
    resolveRequest(message: Message): void;
}
