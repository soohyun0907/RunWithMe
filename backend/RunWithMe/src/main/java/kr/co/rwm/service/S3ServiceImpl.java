package kr.co.rwm.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import kr.co.rwm.util.FileUpload;
import kr.co.rwm.util.S3Util;

@Service
public class S3ServiceImpl implements S3Service {

	@Value("${cloud.aws.s3.bucket}")
	String bucketName;
	@Value("${cloud.aws.credentials.accessKey}")
	String accessKey; // 엑세스 키
	@Value("${cloud.aws.credentials.secretKey}")
	String secretKey;
	
	@Override
	public String thumbnailUpload(MultipartFile file) {
		try {
			
			String uploadpath = "thumbnail";
			S3Util s3 = new S3Util(accessKey, secretKey);
			String img_path = FileUpload.uploadFile(uploadpath, file.getOriginalFilename(), file.getBytes(), bucketName, accessKey, secretKey);
			String img_url = img_path;
			String url = s3.getFileURL(bucketName, uploadpath+img_url);
			return url;
			
		}catch(RuntimeException e) {
			System.out.println(e);
			return null;
		}catch(Exception e) {
			System.out.println(e);
			return null;
		}
	}
	
	@Override
	public String profileUpload(MultipartFile file, ByteArrayOutputStream profile) {
		try {
			
			String uploadpath = "profile";
			S3Util s3 = new S3Util(accessKey, secretKey);
			String img_path = FileUpload.uploadFile(uploadpath, file.getOriginalFilename(), profile.toByteArray(), bucketName, accessKey, secretKey);
			String img_url = img_path;
			String url = s3.getFileURL(bucketName, uploadpath+img_url);
			return url;
			
		}catch(RuntimeException e) {
			System.out.println(e);
			return null;
		}catch(Exception e) {
			System.out.println(e);
			return null;
		}
	}
	
	@Override
	public String challengeImgUpload(MultipartFile file) {
		try {
			
			String uploadpath = "challenges";
			S3Util s3 = new S3Util(accessKey, secretKey);
			String img_path = FileUpload.uploadFile(uploadpath, file.getOriginalFilename(), file.getBytes(), bucketName, accessKey, secretKey);
			String img_url = img_path;
			String url = s3.getFileURL(bucketName, uploadpath+img_url);
			return url;
			
		}catch(RuntimeException e) {
			System.out.println(e);
			return null;
		}catch(Exception e) {
			System.out.println(e);
			return null;
		}
	}

}
