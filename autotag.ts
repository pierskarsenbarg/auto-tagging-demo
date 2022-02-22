import * as pulumi from "@pulumi/pulumi";
import { isTaggable } from "./taggable";

/**
 * registerAutoTags registers a global stack transformation that merges a set
 * of tags with whatever was also explicitly added to the resource definition.
 */
export function registerAutoTags(autoTags: Record<string, string>): void {
    pulumi.runtime.registerStackTransformation((args) => {
        if (isTaggable(args.type)) {
            pulumi.log.info(`Type: ${args.type}`);
            args.props["tags"] = { ...args.props["tags"], ...autoTags };
            pulumi.log.info(`props: ${JSON.stringify(args.props["tags"])}`)
            return { props: args.props, opts: args.opts };
        }
        return undefined;
    });
}