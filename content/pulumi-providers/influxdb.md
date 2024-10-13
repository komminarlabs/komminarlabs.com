---
title: "Pulumi Provider InfluxDB"
description: "Pulumi provider to manage InfluxDB."
summary: ""
date: 2024-10-13T15:33:54+02:00
lastmod: 2024-10-13T15:33:54+02:00
draft: false
weight: 110
toc: true
seo:
  title: "Pulumi Provider InfluxDB" # custom title (optional)
  description: "Pulumi provider to manage InfluxDB." # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

Pulumi provider to manage InfluxDB.

## Supported InfluxDB flavours

### v3

* [InfluxDB Cloud Serverless](https://www.influxdata.com/products/influxdb-cloud/serverless/)

### v2

* [InfluxDB Cloud TSM](https://docs.influxdata.com/influxdb/cloud/)
* [InfluxDB OSS](https://docs.influxdata.com/influxdb/v2/)

## Installing

This package is available for several languages/platforms:

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @komminarlabs/influxdb
```

or `yarn`:

```bash
yarn add @komminarlabs/influxdb
```

### Python

To use from Python, install using `pip`:

```bash
pip install komminarlabs_influxdb
```

### Go

To use from Go, use `go get` to grab the latest version of the library:

```bash
go get github.com/komminarlabs/pulumi-influxdb/sdk/go/...
```

### .NET

To use from .NET, install using `dotnet add package`:

```bash
dotnet add package KomminarLabs.InfluxDB
```

## Configuration

The following configuration points are available for the `influxdb` provider:

- `influxdb:url` (environment: `INFLUXDB_URL`) - The InfluxDB Cloud Dedicated server URL
- `influxdb:token` (environment: `INFLUXDB_TOKEN`) - An InfluxDB token string

## Reference

For detailed reference documentation, please visit [the Pulumi registry](https://www.pulumi.com/registry/packages/influxdb/api-docs/).
