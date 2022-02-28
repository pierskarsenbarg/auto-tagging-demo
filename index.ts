import * as awsx from "@pulumi/awsx";
import * as eks from "@pulumi/eks";
import * as aws from "@pulumi/aws";

import { registerAutoTags } from "./autotag";

registerAutoTags({
    env: "dev",
    owner: "piers"
});

const vpc = new awsx.ec2.Vpc("pk-vpc", {
    subnets: [{
        type: "public",
        cidrMask: 28
    }],
    numberOfAvailabilityZones: 1
});

const subnet = new aws.ec2.Subnet("subnet", {
    vpcId: vpc.id,
    cidrBlock: "10.0.1.0/24"
})


