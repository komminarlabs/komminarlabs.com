---
title: "Terraform Provider MageAI"
description: "Terraform provider to manage Mage AI."
summary: ""
date: 2024-10-13T15:33:54+02:00
lastmod: 2024-10-13T15:33:54+02:00
draft: false
weight: 110
toc: true
seo:
  title: "Terraform Provider MageAI" # custom title (optional)
  description: "Terraform provider to manage Mage AI." # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

Terraform provider to manage Mage AI.

> [!CAUTION]
> 
> This Terraform provider is currently in **active development** and is **not considered stable**. Features, configurations, and behavior may change without notice, and there may be bugs or incomplete functionality.
> 
> **DO NOT** use this provider in any production environment. It is intended for testing and development purposes only.
> 
> Please proceed with caution and keep this in mind when using it in any environment.

## Using the provider

Add the below code to your configuration.

```terraform
terraform {
  required_providers {
    mageai = {
      source = "komminarlabs/mageai"
    }
  }
}
```

Initialize the provider

```terraform
provider "mageai" {
  api_key = "*******"
  host    = "http://localhost:6789"
}
```

## Available functionalities

### Data Sources

* `mageai_block`
* `mageai_blocks`
* `mageai_pipeline`
* `mageai_pipelines`

### Resources

* `mageai_block`
* `mageai_pipeline`
