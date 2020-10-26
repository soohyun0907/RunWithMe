package kr.co.rwm.service;

import org.springframework.web.multipart.MultipartFile;

public interface S3Service {
	
	public String thumbnailUpload(MultipartFile file);

}
