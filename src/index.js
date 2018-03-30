import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const port = process.env.port || 3000;

app.listen(port, () => {
	console.log("Server is working on port "+port);
});