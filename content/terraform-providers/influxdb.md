---
title: "Terraform Provider InfluxDB"
description: "Terraform provider to manage InfluxDB."
summary: ""
date: 2024-10-13T15:33:54+02:00
lastmod: 2024-10-13T15:33:54+02:00
draft: false
weight: 110
toc: true
seo:
  title: "Terraform Provider InfluxDB" # custom title (optional)
  description: "Terraform provider to manage InfluxDB." # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

Terraform provider to manage InfluxDB.

## Using the provider

Add the below code to your configuration.

```terraform
terraform {
  required_providers {
    influxdb = {
      source = "komminarlabs/influxdb"
    }
  }
}
```

Initialize the provider

```terraform
provider "influxdb" {
  url   = "http://localhost:8086"
  token = "influxdb-token"
}
```

## Supported InfluxDB flavours

### v3

* [InfluxDB Cloud Serverless](https://www.influxdata.com/products/influxdb-cloud/serverless/)

### v2

* [InfluxDB Cloud TSM](https://docs.influxdata.com/influxdb/cloud/)
* [InfluxDB OSS](https://docs.influxdata.com/influxdb/v2/)
  
## Available functionalities

### Data Sources

* `influxdb_authorization`
* `influxdb_authorizations`
* `influxdb_bucket`
* `influxdb_buckets`
* `influxdb_organization`
* `influxdb_organizations`

### Resources

* `influxdb_authorization`
* `influxdb_bucket`
* `influxdb_organization`

## Resources

### Organization:

```hcl
resource "influxdb_organization" "iot" {
  name        = "IoT"
  description = "An IoT organization"
}
```

### Bucket:

```hcl
resource "influxdb_bucket" "signals" {
  org_id           = influxdb_organization.iot.id
  name             = "signals"
  description      = "This is a bucket to store signals"
  retention_period = 1209600
}
```

### Authorization:

```hcl
resource "influxdb_authorization" "signals_rw" {
  org_id      = influxdb_organization.iot.id
  description = "Read & Write access signals bucket"

  permissions = [{
    action = "read"
    resource = {
      id     = influxdb_bucket.signals.id
      org_id = influxdb_organization.iot.id
      type   = "buckets"
    }
    },
    {
      action = "write"
      resource = {
        id     = influxdb_bucket.signals.id
        org_id = influxdb_organization.iot.id
        type   = "buckets"
      }
  }]
}
```

## Data Sources

```hcl
data "influxdb_organization" "iot" {
  name = "IoT"
}

output "iot_organization" {
  value = data.influxdb_organization.iot
}

data "influxdb_bucket" "signals" {
  name = "signals"
}

output "signals_bucket" {
  value = data.influxdb_bucket.signals
}
```
