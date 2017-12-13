release:
	gatsby build && aws s3 sync ./public/ s3://modernjsforphpdevs --region ap-southeast-2 --profile zorfling && aws --profile zorfling cloudfront create-invalidation --distribution-id E22UH9OIF463G2 --paths "/*"
