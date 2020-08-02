import express, { Application, Request, Response } from "express";
import { graphqlHTTP } from "express-graphql";
import schema from "./schema";
import cors from "cors";

const app: Application = express();

app.use(cors());
app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    graphiql: true,
  })
);

app.get("/", (req: Request, res: Response) => {
  res.send("hello world");
});

const PORT = process.env.PORT || 3030;

app.listen(PORT, () => console.log(`Server running on port: ${PORT}`));
