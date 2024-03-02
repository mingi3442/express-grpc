// package: message
// file: message_service.proto

/* tslint:disable */
/* eslint-disable */

import * as grpc from "@grpc/grpc-js";
import * as message_service_pb from "./message_service_pb";

interface IMessageServiceService extends grpc.ServiceDefinition<grpc.UntypedServiceImplementation> {
    sendMessage: IMessageServiceService_ISendMessage;
}

interface IMessageServiceService_ISendMessage extends grpc.MethodDefinition<message_service_pb.SendMessageRequest, message_service_pb.SendMessageResponse> {
    path: "/message.MessageService/SendMessage";
    requestStream: false;
    responseStream: false;
    requestSerialize: grpc.serialize<message_service_pb.SendMessageRequest>;
    requestDeserialize: grpc.deserialize<message_service_pb.SendMessageRequest>;
    responseSerialize: grpc.serialize<message_service_pb.SendMessageResponse>;
    responseDeserialize: grpc.deserialize<message_service_pb.SendMessageResponse>;
}

export const MessageServiceService: IMessageServiceService;

export interface IMessageServiceServer extends grpc.UntypedServiceImplementation {
    sendMessage: grpc.handleUnaryCall<message_service_pb.SendMessageRequest, message_service_pb.SendMessageResponse>;
}

export interface IMessageServiceClient {
    sendMessage(request: message_service_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: message_service_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    sendMessage(request: message_service_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_service_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    sendMessage(request: message_service_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_service_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
}

export class MessageServiceClient extends grpc.Client implements IMessageServiceClient {
    constructor(address: string, credentials: grpc.ChannelCredentials, options?: Partial<grpc.ClientOptions>);
    public sendMessage(request: message_service_pb.SendMessageRequest, callback: (error: grpc.ServiceError | null, response: message_service_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public sendMessage(request: message_service_pb.SendMessageRequest, metadata: grpc.Metadata, callback: (error: grpc.ServiceError | null, response: message_service_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
    public sendMessage(request: message_service_pb.SendMessageRequest, metadata: grpc.Metadata, options: Partial<grpc.CallOptions>, callback: (error: grpc.ServiceError | null, response: message_service_pb.SendMessageResponse) => void): grpc.ClientUnaryCall;
}
