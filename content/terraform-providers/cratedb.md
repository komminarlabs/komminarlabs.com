---
title: "Terraform Provider CrateDB"
description: "Terraform provider to manage CrateDB."
summary: ""
date: 2024-10-13T15:33:54+02:00
lastmod: 2024-10-13T15:33:54+02:00
draft: false
weight: 110
toc: true
seo:
  title: "Terraform Provider CrateDB" # custom title (optional)
  description: "Terraform provider to manage CrateDB" # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

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
