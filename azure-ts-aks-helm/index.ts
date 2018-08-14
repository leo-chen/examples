// Copyright 2016-2017, Pulumi Corporation.  All rights reserved.

import * as azure from "@pulumi/azure";
import * as helm from "@pulumi/kubernetes/helm";
import * as k8s from "@pulumi/kubernetes";
import * as pulumi from "@pulumi/pulumi";
import { k8sProvider } from "./cluster";
import * as config from "./config";

const nginx = new helm.v2.Chart("nginx", {
    repo: "stable",
    chart: "nginx-lego",
    version: "0.3.1",
}, { providers: { kubernetes: k8sProvider } });

export let frontendIp =
    (nginx.resources["v1/Service::default/nginx-nginx-lego"] as k8s.core.v1.Service).
        spec.apply(s => s.clusterIP);
