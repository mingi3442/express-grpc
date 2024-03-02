import { sendUnaryData, ServerUnaryCall } from "@grpc/grpc-js";
import { IMessageServiceServer } from "../generated/message_service_grpc_pb";
import { SendMessageRequest, SendMessageResponse } from "../generated/message_service_pb";

export interface IMessageServiceHandlers extends IMessageServiceServer {
  sendMessage: (call: ServerUnaryCall<SendMessageRequest, SendMessageResponse>, callback: sendUnaryData<SendMessageResponse>) => void;
}
