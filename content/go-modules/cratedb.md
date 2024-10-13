---
title: "CrateDB Cloud API Client Go Library"
description: "The CrateDB Cloud API client Go library to allow programmatic access to the Cloud products."
summary: ""
date: 2024-10-13T15:33:54+02:00
lastmod: 2024-10-13T15:33:54+02:00
draft: false
weight: 810
toc: true
seo:
  title: "CrateDB Cloud API Client Go Library" # custom title (optional)
  description: "The CrateDB Cloud API client Go library to allow programmatic access to the Cloud products." # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

The CrateDB Cloud API client Go library to allow programmatic access to the Cloud products.

## Go Docs

- Refer [go docs](https://pkg.go.dev/github.com/komminarlabs/cratedb)

## Usage

### Environment variables

```bash
export CRATEDB_BASE_URL="https://console.cratedb.cloud/"
export CRATEDB_API_KEY="crate_09NZV-SXkpX3feMJWXxnSNY2AAa98RlKkxqvqdQBlfC"
export CRATEDB_API_SECRET="S5ChS_eQHoUxzplSOv11xQrFRD8W_G-I5Z43w56RIqn"
```

### Sample code to list database tokens

```go
package main

import (
	"context"
	"io"
	"net/http"

	"github.com/caarlos0/env/v11"
	"github.com/komminarlabs/cratedb"
)

type CratedbConfig struct {
	BaseURL   string `env:"CRATEDB_BASE_URL"`
	ApiKey    string `env:"CRATEDB_API_KEY"`
	ApiSecret string `env:"CRATEDB_API_SECRET"`
}

func main() {
	cfg := CratedbConfig{}
	opts := env.Options{RequiredIfNoDef: true}

	err := env.ParseWithOptions(&cfg, opts)
	if err != nil {
		panic(err)
	}

	ctx := context.Background()
	client, err := cratedb.NewClient(cfg.BaseURL, cratedb.WithRequestEditorFn(func(ctx context.Context, req *http.Request) error {
		req.SetBasicAuth(cfg.ApiKey, cfg.ApiSecret)
		return nil
	}))
	if err != nil {
		panic(err)
	}

	resp, err := client.GetApiV2UsersMe(ctx)
	if err != nil {
		panic(err)
	}
	defer resp.Body.Close()

	if resp.StatusCode == http.StatusOK {
		bodyBytes, err := io.ReadAll(resp.Body)
		if err != nil {
			panic(err)
		}
		bodyString := string(bodyBytes)
		println(bodyString)
	}
}
```
