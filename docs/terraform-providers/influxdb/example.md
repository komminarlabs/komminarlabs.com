# Examples

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
