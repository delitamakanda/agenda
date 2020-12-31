# Docker images published in project container registry
#
# Used in the pipeline:
# - docker executors are faster to fetch images (compared to docker.io registry)
# - avoids to have before_script for setup which slower the jobs

# Install dependencies and build the project
FROM node:11.5.0 AS ci-node

# Run unit test
FROM ci-node AS ci-tests

RUN \
  apk add chromium &&\
  yarn global add coverage-average

ENV CHROME_BIN /usr/bin/chromium-browser
