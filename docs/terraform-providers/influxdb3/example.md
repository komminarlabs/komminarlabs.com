# Examples

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
