const express = require('express');
const helmet = require('helmet');
const cors = require('cors');
const projectRoutes = require('./routes/projectRoutes');
const actionRoutes = require('./routes/actionRoutes');

const server = express();
const port = process.env.PORT || 5000;

server.use(express.json());
server.use(cors());
server.use(helmet());

server.use('/api/projects', projectRoutes);
server.use('/api/actions', actionRoutes);

server.get('/', (req, res) => {
  res.status(200).json({
    message: 'Web API Challenge by James Eneh'
  });
});

server.listen(port, () => {
  console.log(`Server running on port: ${port}`);
})

/*
play this: https://www.youtube.com/watch?v=d-diB65scQU

Sing along:

here's a little code I wrote, you might want to read it really slow, don't worry be happy
in every line there may be trouble, but if you worry you make it double, don't worry, be happy
ain't got no sense of what is REST? just concentrate on learning Express, don't worry, be happy
your file is getting way too big, bring a Router and make it thin, don't worry, be crafty
there is no data on that route, just write some code, you'll sort it out… don't worry, just API…
I need this code, just don't know where, perhaps should make some middleware, don't worry, be happy

Go code!
*/
