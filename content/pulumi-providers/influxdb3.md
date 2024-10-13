---
title: "Pulumi Provider InfluxDB3"
description: "Pulumi provider to manage InfluxDB V3"
summary: ""
date: 2024-10-13T15:33:54+02:00
lastmod: 2024-10-13T15:33:54+02:00
draft: false
weight: 110
toc: true
seo:
  title: "Pulumi Provider InfluxDB3" # custom title (optional)
  description: "Pulumi provider to manage InfluxDB V3" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

Pulumi provider to manage InfluxDB V3

## Supported InfluxDB flavours

* [InfluxDB Cloud Dedicated](https://www.influxdata.com/products/influxdb-cloud/dedicated/)

## Installing

This package is available for several languages/platforms:

### Node.js (JavaScript/TypeScript)

To use from JavaScript or TypeScript in Node.js, install using either `npm`:

```bash
npm install @komminarlabs/influxdb3
```

or `yarn`:

```bash
yarn add @komminarlabs/influxdb3
```

### Python

To use from Python, install using `pip`:

```bash
pip install komminarlabs-influxdb3
```

### Go

To use from Go, use `go get` to grab the latest version of the library:

```bash
go get github.com/komminarlabs/pulumi-influxdb3/sdk/go/...
```

### .NET

To use from .NET, install using `dotnet add package`:

```bash
dotnet add package KomminarLabs.InfluxDB3
```

## Configuration

The following configuration points are available for the `influxdb3` provider:

- `influxdb3:account_id` (environment: `INFLUXDB3_ACCOUNT_ID`) - The ID of the account that the cluster belongs to
- `influxdb3:cluster_id` (environment: `INFLUXDB3_CLUSTER_ID`) - The ID of the cluster that you want to manage
- `influxdb3:token` (environment: `INFLUXDB3_TOKEN`) - The InfluxDB management token
- `influxdb3:url` (environment: `INFLUXDB3_URL`) - The InfluxDB Cloud Dedicated Management API URL

## Reference

For detailed reference documentation, please visit [the Pulumi registry](https://www.pulumi.com/registry/packages/influxdb3/api-docs/).
