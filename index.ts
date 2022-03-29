import * as pulumi from "@pulumi/pulumi";
import * as gcp from "@pulumi/gcp";

const config = new pulumi.Config();
const customBucketName = config.require('bucketName');

// Create a GCP resource (Storage Bucket)
const bucket = new gcp.storage.Bucket(customBucketName, {
    location: "US"
});

// Export the DNS name of the bucket
export const bucketName = bucket.url;
