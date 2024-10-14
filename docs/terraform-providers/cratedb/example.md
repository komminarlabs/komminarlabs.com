# Examples

## Resources

### Organization:

```hcl
resource "cratedb_organization" "default" {
  name = "default"
}
```

### Cluster:

```hcl
resource "cratedb_cluster" "default" {
  organization_id = "667796de-3c06-4503-bc3c-a9adc2a849cc"
  crate_version   = "5.8.2"
  name            = "default-cluster"
  product_name    = "cr4"
  product_tier    = "default"
  project_id      = "a99eb2a8-bcf5-418c-866f-67e65a8ada40"
  subscription_id = "7c156ae9-9c07-4106-8f42-df93855876c1"
  username        = "admin"
  password        = "zyTChd9mfcGBFLb72nJkNeVj6"
}
```

### Project:

```hcl
resource "cratedb_project" "default" {
  name            = "default-project"
  organization_id = "667796de-3c06-4503-bc3c-a9adc2a849cc"
  region          = "eks1.eu-west-1.aws"
}
```

## Data Sources

```hcl
data "cratedb_cluster" "default" {
  id = "156e7f96-0f6e-4fcc-8940-6e2a52efcee3"
}

output "default_cluster" {
  value     = data.cratedb_cluster.default
  sensitive = true
}

data "cratedb_organization" "default" {
  id = "667796de-3c06-4503-bc3c-a9adc2a849cc"
}

output "default_organization" {
  value = data.cratedb_organization.default
}

data "cratedb_organizations" "all" {}

output "all_organizations" {
  value = data.cratedb_organizations.all
}

data "cratedb_project" "default" {
  id = "2f310566-f171-4bf6-bf2e-46e045ff3708"
}

output "default_project" {
  value = data.cratedb_project.default
}
```
