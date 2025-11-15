FROM golang:alpine AS builder
RUN apk add build-base
WORKDIR /build
ADD go.mod .
COPY . .
ENV CGO_ENABLED=1
RUN go build -o run main.go

FROM alpine
WORKDIR /build
COPY --from=builder /build/run /build/run
# COPY --from=builder /build/.env /build/.env
# COPY --from=builder /build/templates /build/templates
EXPOSE 8080
CMD ["./run"]