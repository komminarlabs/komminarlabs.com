# Usage

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

## Provider Documentation

Refer [here](https://registry.terraform.io/providers/komminarlabs/influxdb/latest/docs) for the provider documentation.
