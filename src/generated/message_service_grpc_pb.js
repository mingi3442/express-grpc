// GENERATED CODE -- DO NOT EDIT!

'use strict';
var grpc = require('@grpc/grpc-js');
var message_service_pb = require('./message_service_pb.js');

function serialize_message_SendMessageRequest(arg) {
  if (!(arg instanceof message_service_pb.SendMessageRequest)) {
    throw new Error('Expected argument of type message.SendMessageRequest');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_message_SendMessageRequest(buffer_arg) {
  return message_service_pb.SendMessageRequest.deserializeBinary(new Uint8Array(buffer_arg));
}

function serialize_message_SendMessageResponse(arg) {
  if (!(arg instanceof message_service_pb.SendMessageResponse)) {
    throw new Error('Expected argument of type message.SendMessageResponse');
  }
  return Buffer.from(arg.serializeBinary());
}

function deserialize_message_SendMessageResponse(buffer_arg) {
  return message_service_pb.SendMessageResponse.deserializeBinary(new Uint8Array(buffer_arg));
}


var MessageServiceService = exports.MessageServiceService = {
  sendMessage: {
    path: '/message.MessageService/SendMessage',
    requestStream: false,
    responseStream: false,
    requestType: message_service_pb.SendMessageRequest,
    responseType: message_service_pb.SendMessageResponse,
    requestSerialize: serialize_message_SendMessageRequest,
    requestDeserialize: deserialize_message_SendMessageRequest,
    responseSerialize: serialize_message_SendMessageResponse,
    responseDeserialize: deserialize_message_SendMessageResponse,
  },
};

exports.MessageServiceClient = grpc.makeGenericClientConstructor(MessageServiceService);
