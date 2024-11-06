FROM alpine:latest

# Define PocketBase version to download
ARG PB_VERSION=0.22.23

# Install necessary packages
RUN apk add --no-cache \
    unzip \
    ca-certificates

# Download and unzip PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# Copy local PocketBase data and files into the container
COPY ./pb_data /pb/pb_data
COPY ./pb_public /pb/pb_public
COPY ./pb_migrations /pb/pb_migrations

# Optional: uncomment these lines if you have migrations or hooks
# COPY ./pb_hooks /pb/pb_hooks

# Expose the PocketBase port
EXPOSE 8080

# Start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]