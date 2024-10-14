# Provider Usage

Terraform provider to manage InfluxDB V3

:::danger [!CAUTION] 
This Terraform provider is currently in **active development** and is **not considered stable**. Features, configurations, and behavior may change without notice, and there may be bugs or incomplete functionality.

**DO NOT** use this provider in any production environment. It is intended for testing and development purposes only. 
Please proceed with caution and keep this in mind when using it in any environment.
:::

## Using the provider

## Example Usage

```terraform
terraform {
  required_providers {
    mageai = {
      source = "komminarlabs/mageai"
    }
  }
}

provider "mageai" {}
```

## Environment Variables

Credentials can be provided by using the `MAGEAI_API_KEY` and `MAGEAI_HOST`.

### Example

```terraform
export MAGEAI_API_KEY="*******"
export MAGEAI_HOST="http://localhost:6789"

provider "mageai" {}

terraform plan
```

## Schema

### Optional

- `api_key` (String, Sensitive) The API key to authenticate calls
- `host` (String, Sensitive) The host of the Mage AI server
