---
title: "InfluxDB v3 Cloud Dedicated Management API Go Client Library"
description: "The InfluxDB v3 Management API Go client library lets you manage an InfluxDB Cloud Dedicated instance and integrate functions such as creating and managing databases, permissions, and tokens into your workflow or application."
summary: ""
date: 2024-10-13T15:33:54+02:00
lastmod: 2024-10-13T15:33:54+02:00
draft: false
weight: 810
toc: true
seo:
  title: "InfluxDB v3 Cloud Dedicated Management API Go Client Library" # custom title (optional)
  description: "The InfluxDB v3 Management API Go client library lets you manage an InfluxDB Cloud Dedicated instance and integrate functions such as creating and managing databases, permissions, and tokens into your workflow or application." # custom description (recommended)
  canonical: "" # custom canonical URL (optional)
  robots: "" # custom robot tags (optional)
---

The InfluxDB v3 Management API Go client library lets you manage an InfluxDB Cloud Dedicated instance and integrate functions such as creating and managing databases, permissions, and tokens into your workflow or application.

## Go Docs

- Refer [go docs](https://pkg.go.dev/github.com/komminarlabs/influxdb3)

## Usage

### Environment variables

```bash
export INFLUXDB_BASE_URL="https://console.influxdata.com/api/v0"
export INFLUXDB_ACCOUNT_ID="4ade9b2e-0a52-4a46-b3b8-1b43ea493a98"
export INFLUXDB_CLUSTER_ID="a379c48a-791e-47fe-ba64-628ba19507e8"
export INFLUXDB_TOKEN="1e0f14063eb14a9e94fe765bf999a90cb7962f8e0f394110b91053ea26cdce5071d6bca29e4d4684bed463cf2ea9f381"
```

### Sample code to list database tokens

```go
package main

import (
	"context"
	"io"
	"net/http"

	"github.com/caarlos0/env/v11"
	"github.com/komminarlabs/influxdb3"
)

type InfluxdbConfig struct {
	AccountId influxdb3.UuidV4 `env:"INFLUXDB_ACCOUNT_ID"`
	BaseURL   string           `env:"INFLUXDB_BASE_URL"`
	ClusterId influxdb3.UuidV4 `env:"INFLUXDB_CLUSTER_ID"`
	Token     string           `env:"INFLUXDB_TOKEN"`
}

func main() {
	cfg := InfluxdbConfig{}
	opts := env.Options{RequiredIfNoDef: true}

	err := env.ParseWithOptions(&cfg, opts)
	if err != nil {
		panic(err)
	}

	ctx := context.Background()
	client, err := influxdb3.NewClient(cfg.BaseURL, influxdb3.WithRequestEditorFn(func(ctx context.Context, req *http.Request) error {
		req.Header.Set("Accept", "application/json")
		req.Header.Set("Authorization", "Bearer "+cfg.Token)
		return nil

	}))
	if err != nil {
		panic(err)
	}

	resp, err := client.GetDatabaseTokens(ctx, cfg.AccountId, cfg.ClusterId)
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
