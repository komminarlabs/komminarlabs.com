# Usage

Terraform provider to manage CrateDB.

## Using the provider

Add the below code to your configuration.

```terraform
terraform {
  required_providers {
    cratedb = {
      source = "komminarlabs/cratedb"
    }
  }
}
```

Initialize the provider

```terraform
provider "cratedb" {
  api_key    = "*******"
  api_secret = "*******"
  url        = "https://console.cratedb.cloud/"
}
```

## Available functionalities

### Data Sources

* `cratedb_cluster`
* `cratedb_organization`
* `cratedb_organizations`
* `cratedb_project`

### Resources

* `cratedb_cluster`
* `cratedb_organization`
* `cratedb_project`

## Provider Documentation

Refer [here](https://registry.terraform.io/providers/komminarlabs/cratedb/latest/docs) for the provider documentation.
