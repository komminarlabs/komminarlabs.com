# Provider Usage

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
