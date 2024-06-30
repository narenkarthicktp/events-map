import express from 'express';
import queue from 'bull';

const env = process.env;

const events_queue = new queue("events", env.REDIS_URL);
const app = new express();
app.use(express.json());

let curr_events = new Set();

events_queue.process("ADD", (job, done) => {
    curr_events.add(job.data);
    done();
});
events_queue.process("DEL", (job, done) => {
    curr_events.delete(job.data);
    done();
});

app.post("/events/add", (req, res) => {
    console.debug(req.body);
    events_queue.add("ADD", req.body);
    events_queue.add("DEL", req.body);
    res.sendStatus(200);
});
app.get("/events/stream", (req, res) => {
    res.setHeader("Access-Control-Allow-Origin", "*");
    res.setHeader("Content-Type", "text/event-stream");
    events_queue.on('completed', (job, result) => res.write(`data: ${JSON.stringify(job.data)}\n\n`));
});
app.get("/ping", (req, res) => res.send("pong"));

app.listen(env.PORT);
console.log(`listening on ${env.PORT}`);

