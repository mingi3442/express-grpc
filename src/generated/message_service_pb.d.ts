// package: message
// file: message_service.proto

/* tslint:disable */
/* eslint-disable */

import * as jspb from "google-protobuf";

export class SendMessageRequest extends jspb.Message { 
    getMessage(): string;
    setMessage(value: string): SendMessageRequest;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageRequest.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageRequest): SendMessageRequest.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageRequest, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageRequest;
    static deserializeBinaryFromReader(message: SendMessageRequest, reader: jspb.BinaryReader): SendMessageRequest;
}

export namespace SendMessageRequest {
    export type AsObject = {
        message: string,
    }
}

export class SendMessageResponse extends jspb.Message { 
    getResult(): string;
    setResult(value: string): SendMessageResponse;

    serializeBinary(): Uint8Array;
    toObject(includeInstance?: boolean): SendMessageResponse.AsObject;
    static toObject(includeInstance: boolean, msg: SendMessageResponse): SendMessageResponse.AsObject;
    static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
    static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
    static serializeBinaryToWriter(message: SendMessageResponse, writer: jspb.BinaryWriter): void;
    static deserializeBinary(bytes: Uint8Array): SendMessageResponse;
    static deserializeBinaryFromReader(message: SendMessageResponse, reader: jspb.BinaryReader): SendMessageResponse;
}

export namespace SendMessageResponse {
    export type AsObject = {
        result: string,
    }
}
