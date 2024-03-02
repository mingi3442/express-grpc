import express from "express";
import { client } from "./grpcClient";

const app = express();
app.use(express.json());
const port = 3000;

app.post("/send", (req, res) => {
  (client as any).SendMessage({ message: req.body.message }, (error: any, response: any) => {
    if (error) {
      return res.status(500).send(error.details);
    }
    res.json(response);
  });
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});
