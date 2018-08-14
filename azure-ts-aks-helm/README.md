# Azure Kubernetes Service (AKS) Cluster and Helm Chart

This example demonstrates creating an Azure Kubernetes Service (AKS) Cluster, and deploying a Helm Chart into it,
using a single program. This lets you manage delivery of the infrastructure and Kubernetes deployments using one
program and the same tools. Please see https://docs.microsoft.com/en-us/azure/aks/ for more information about AKS.

> This example requires an Azure account. If you don't have one,
> [sign up for free here](https://azure.microsoft.com/en-us/free/).


# Prerequisites

This example uses Helm, so you will need to install and configure it:

* https://docs.helm.sh/using_helm/#installing-helm
* `helm init --client-only`


$ pulumi config set azure:environment public
$ export AZURE_CLIENT_ID=$(az account show | jq -r ".id")
$ export AZURE_CLIENT_SECRET=$(az ad sp create-for-rbac --role="Contributor" --scopes="/subscriptions/${AZURE_CLIENT_ID}" | jq -r ".password")
$ pulumi config set clientId $AZURE_CLIENT_ID
$ pulumi config set clientSecret $AZURE_CLIENT_SECRET --secret

$ ssh-keygen -t rsa -f key.rsa
$ pulumi config set sshPublicKey < key.rsa.pub
