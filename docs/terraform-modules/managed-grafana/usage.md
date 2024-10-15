# Usage

Terraform module to create and manage Amazon Managed Grafana.

## Requirements

| Name | Version |
|------|---------|
| <a name="requirement_terraform"></a> [terraform](#requirement\_terraform) | >= 1.0 |

## Providers

| Name | Version |
|------|---------|
| <a name="provider_aws"></a> [aws](#provider\_aws) | n/a |

## Modules

No modules.

## Resources

| Name | Type |
|------|------|
| [aws_grafana_license_association.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/grafana_license_association) | resource |
| [aws_grafana_role_association.this](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/grafana_role_association) | resource |
| [aws_grafana_workspace.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/grafana_workspace) | resource |
| [aws_grafana_workspace_api_key.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/grafana_workspace_api_key) | resource |
| [aws_grafana_workspace_saml_configuration.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/grafana_workspace_saml_configuration) | resource |
| [aws_iam_policy.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_policy) | resource |
| [aws_iam_role.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role) | resource |
| [aws_iam_role_policy_attachment.data_sources](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) | resource |
| [aws_iam_role_policy_attachment.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/resources/iam_role_policy_attachment) | resource |
| [aws_caller_identity.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/caller_identity) | data source |
| [aws_iam_policy_document.assume_policy](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_iam_policy_document.default](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/iam_policy_document) | data source |
| [aws_partition.current](https://registry.terraform.io/providers/hashicorp/aws/latest/docs/data-sources/partition) | data source |

## Inputs


## Outputs

| Name | Description |
|------|-------------|
| <a name="output_license_expiration"></a> [license\_expiration](#output\_license\_expiration) | The expiration date of the enterprise license |
| <a name="output_license_free_trial_expiration"></a> [license\_free\_trial\_expiration](#output\_license\_free\_trial\_expiration) | The expiration date of the free trial |
| <a name="output_workspace"></a> [workspace](#output\_workspace) | The Grafana workspace details |
| <a name="output_workspace_api_keys"></a> [workspace\_api\_keys](#output\_workspace\_api\_keys) | The workspace API keys created including their attributes |
| <a name="output_workspace_iam_role"></a> [workspace\_iam\_role](#output\_workspace\_iam\_role) | The IAM role details of the Grafana workspace |
| <a name="output_workspace_saml"></a> [workspace\_saml](#output\_workspace\_saml) | The Grafana workspace saml configuration details |
