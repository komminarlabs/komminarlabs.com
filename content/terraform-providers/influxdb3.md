---
title: "Terraform Provider InfluxDB3"
description: "Terraform provider to manage InfluxDB V3"
summary: ""
date: 2024-10-13T15:33:54+02:00
lastmod: 2024-10-13T15:33:54+02:00
draft: false
weight: 110
toc: true
seo:
  title: "Terraform Provider InfluxDB3" # custom title (optional)
  description: "Terraform provider to manage InfluxDB V3" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

Terraform provider to manage InfluxDB V3

## Using the provider

Add the below code to your configuration.

```terraform
terraform {
  required_providers {
    influxdb3 = {
      source = "komminarlabs/influxdb3"
    }
  }
}
```

Initialize the provider

```terraform
provider "influxdb3" {
  account_id = "*******"
  cluster_id = "*******"
  token      = "*******"
  url        = "https://console.influxdata.com/api/v0"
}
```

## Supported InfluxDB flavours

* [InfluxDB Cloud Dedicated](https://www.influxdata.com/products/influxdb-cloud/dedicated/)

## Available functionalities

### Data Sources

* `influxdb3_database`
* `influxdb3_databases`
* `influxdb3_token`
* `influxdb3_tokens`

### Resources

* `influxdb3_database`
* `influxdb3_token`

## Resources

### Database:

```hcl
resource "influxdb3_database" "signals" {
  name             = "signals"
  retention_period = 604800

  partition_template = [
    {
      type  = "tag"
      value = "line"
    },
    {
      type  = "tag"
      value = "station"
    },
    {
      type  = "time"
      value = "%Y-%m-%d"
    },
    {
      type = "bucket"
      value = jsonencode({
        "tagName" : "temperature",
        "numberOfBuckets" : 10
      })
    },
  ]
}
```

### Token:

```hcl
resource "influxdb3_token" "signals_rw" {
  description = "Read & Write access to signals database"

  permissions = [{
    action   = "read"
    resource = influxdb3_database.signals.name
    },
    {
      action   = "write"
      resource = influxdb3_database.signals.name
  }]
}
```

## Data Sources

```hcl
data "influxdb3_database" "signals" {
  name = "signals"
}

output "signals_bucket" {
  value = data.influxdb3_database.signals
}
```
