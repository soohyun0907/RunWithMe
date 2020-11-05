package kr.co.rwm.util;

import java.awt.Graphics2D;
import java.awt.image.BufferedImage;
import java.io.File;
import java.io.IOException;
import java.io.InputStream;
import java.text.DecimalFormat;
import java.util.Calendar;
import java.util.UUID;

import javax.imageio.ImageIO;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.web.multipart.MultipartFile;


public class FileUpload {

	private static final Logger logger = LoggerFactory.getLogger(FileUpload.class);
	

	public static String uploadFile(String uploadPath, String originalName, byte[] byteData,String bucketName, String accessKey, String secretKey) throws Exception {
		S3Util s3 = new S3Util(accessKey, secretKey);

		// 랜덤의 uid 를 만들어준다.
		UUID uid = UUID.randomUUID();

		// savedName : 570d570a-7af1-4afe-8ed5-391d660084b7_g.JPG 같은 형식으로 만들어준다.
		String savedName = "/" + uid.toString().substring(0, 10) + "_" + originalName;

		logger.info("업로드 경로 : " + uploadPath);
		// \2017\12\27 같은 형태로 저장해준다.
		String savedPath = calcPath(uploadPath);

		String uploadedFileName = null;
		uploadedFileName = (savedPath + savedName).replace(File.separatorChar, '/');
		// S3Util 의 fileUpload 메서드로 파일을 업로드한다.
		s3.fileUpload(bucketName, uploadPath + uploadedFileName, byteData);
		System.out.println(uploadedFileName);
		logger.info(uploadedFileName);
		return uploadedFileName;

	}

	private static String calcPath(String uploadPath) {
		System.out.println("calcPath");
		Calendar cal = Calendar.getInstance();

		String yearPath = File.separator + cal.get(Calendar.YEAR);

		String monthPath = yearPath + File.separator + new DecimalFormat("00").format(cal.get(Calendar.MONTH) + 1);

		String datePath = monthPath + File.separator + new DecimalFormat("00").format(cal.get(Calendar.DATE));

		makeDir(uploadPath, yearPath, monthPath, datePath);

		logger.info(datePath);

		return datePath;
	}

	private static void makeDir(String uploadPath, String... paths) {
		System.out.println("makeDir");
		if (new File(paths[paths.length - 1]).exists()) {
			return;
		}

		for (String path : paths) {

			File dirPath = new File(uploadPath + path);

			if (!dirPath.exists()) {
				dirPath.mkdir();
			}
		}
	}
	
	public static BufferedImage resize(MultipartFile profile, int width, int height)
            {
        BufferedImage inputImage;
		try {
			inputImage = ImageIO.read(profile.getInputStream());
			BufferedImage outputImage =
					new BufferedImage(width, height, inputImage.getType());
			
			Graphics2D graphics2D = outputImage.createGraphics();
			graphics2D.drawImage(inputImage, 0, 0, width, height, null);
			graphics2D.dispose();
			
			return outputImage;
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		return null;

    }

	

}
