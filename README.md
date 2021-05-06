# ImageS3

##Bucket Policy

{
    "Version": "2012-10-17",
    "Id": "Policy1618979465818",
    "Statement": [
        {
            "Sid": "Stmt1618979463021",
            "Effect": "Allow",
            "Principal": "*",
            "Action": "s3:GetObject",
            "Resource": "bucket-arn/*"
        }
    ]
}