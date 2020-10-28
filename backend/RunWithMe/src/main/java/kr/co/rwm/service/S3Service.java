package kr.co.rwm.service;

import java.awt.image.BufferedImage;
import java.io.ByteArrayOutputStream;

import org.springframework.web.multipart.MultipartFile;

public interface S3Service {
	
	public String thumbnailUpload(MultipartFile file);

	String profileUpload(MultipartFile file, ByteArrayOutputStream profile);

	public String mediaFileUpload(MultipartFile multipartFile);

}
