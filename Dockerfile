FROM jenkins/agent:latest-bullseye-jdk11
ARG user=root
USER "${user}"
RUN apt-get update \
  && apt-get --yes --no-install-recommends install \
    ca-certificates \
    curl \
    nodejs npm  \
    fontconfig \
    git \
    git-lfs \
    less \
    netbase \
    openssh-client \
    patch \
    tzdata

RUN apk --no-cache add bash openconnect openssl

COPY scripts/entrypoint.sh /tmp/

RUN chmod +x /tmp/entrypoint.sh

WORKDIR /tmp

CMD ["/bin/bash", "/tmp/entrypoint.sh"]