import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const PROTO_PATH = __dirname + "/proto/message_service.proto";

const packageDefinition = protoLoader.loadSync(PROTO_PATH, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});
const protoDescriptor = grpc.loadPackageDefinition(packageDefinition);
const messagePackage = protoDescriptor.message as unknown as { MessageService: typeof grpc.Client };

export const client = new messagePackage.MessageService("localhost:50051", grpc.credentials.createInsecure());
