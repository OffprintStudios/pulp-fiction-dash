FROM ubuntu:focal

RUN apt-get update && apt-get install -y curl wget gnupg git clang

# Download rust and add it to the PATH
RUN curl https://sh.rustup.rs -sSf |  bash -s -- -y
RUN echo 'source $HOME/.cargo/env' >> $HOME/.bashrc
ENV PATH "$PATH:/root/.cargo/bin"

ENV PATH "$PATH:/opt/pulpd/node_modules/.bin"

WORKDIR /opt/pulpd
COPY . .
RUN ls

RUN cargo build --release

EXPOSE 3333
EXPOSE 3000
EXPOSE 8888
EXPOSE 8000
EXPOSE 27017

ENTRYPOINT ["cargo", "run", '--release']