import * as grpc from "@grpc/grpc-js";
import * as protoLoader from "@grpc/proto-loader";

const PROTO_FILE = __dirname + "/proto/message_service.proto";

const packageDefinition = protoLoader.loadSync(PROTO_FILE, {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
});

const proto = grpc.loadPackageDefinition(packageDefinition) as any;
const server = new grpc.Server();

const messageServiceHandlers = {
  SendMessage: (call: any, callback: any) => {
    const reply = { result: `Message received: ${call.request.message}` };
    callback(null, reply);
  },
};

server.addService(proto.message.MessageService.service, messageServiceHandlers);

server.bindAsync("0.0.0.0:50051", grpc.ServerCredentials.createInsecure(), (err, port) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log(`Server listening on ${port}`);
  server.start();
});
