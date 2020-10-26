package kr.co.rwm.util;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

import com.amazonaws.ClientConfiguration;
import com.amazonaws.Protocol;
import com.amazonaws.auth.AWSCredentials;
import com.amazonaws.auth.BasicAWSCredentials;
import com.amazonaws.regions.Region;
import com.amazonaws.regions.Regions;
import com.amazonaws.services.s3.AmazonS3;
import com.amazonaws.services.s3.AmazonS3Client;

@Configuration
public class AWSConfiguration {
	@Value("${cloud.aws.credentials.accessKey}")
	private String accessKey;
	@Value("${cloud.aws.credentials.secretKey}")
	private String secretKey;
	@Value("${cloud.aws.region.static}")
	private String region;

	@Bean
	public BasicAWSCredentials basicAWSCredentials() {
		return new BasicAWSCredentials(accessKey, secretKey);
	}
	
	private AmazonS3 conn;

	@Bean
	public AmazonS3Client amazonS3Client(AWSCredentials awsCredentials) {
		ClientConfiguration clientConfig = new ClientConfiguration();
		clientConfig.setProtocol(Protocol.HTTP);
		AmazonS3Client amazonS3Client = new AmazonS3Client(awsCredentials,clientConfig);
		amazonS3Client.setRegion(Region.getRegion(Regions.fromName(region)));
		return amazonS3Client;
	}
}
