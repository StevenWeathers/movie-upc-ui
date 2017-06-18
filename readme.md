## Movie UPC UI

This is a UI built to query the Movie UPC API to retrieve movies by UPC

## Installation

This UI is best served with [Docker](https://www.docker.com/)

```bash
docker build -t movie-upc-ui .
docker run -d -p 8080:8080 --name=movie-upc-ui movie-upc-ui
```

What about [Docker Compose](https://docs.docker.com/compose/)?

```bash
docker-compose up --build
```

## Open Source Projects
Project | License
--- | ---
[Docker](https://github.com/docker/docker) | [Apache-2.0](https://github.com/docker/docker/blob/master/LICENSE)
[Node]() | [BSD-3-Clause]()

Example UPC: 024543155782