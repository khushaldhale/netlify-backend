const express = require("express");
const app = express();



app.use(express.json());


app.get("/", (req, res) => {
	return res.status(200)
		.json({
			success: true,
			message: "server is up and running"
		})
})

app.listen(4000, () => {
	console.log("server is listening at :  4000")
})