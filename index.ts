import * as awsx from "@pulumi/awsx";

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
