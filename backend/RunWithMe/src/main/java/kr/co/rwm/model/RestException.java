package kr.co.rwm.model;

import org.springframework.http.HttpStatus;

public class RestException extends RuntimeException {

	private static final long serialVersionUID = 1L;
	
	private HttpStatus status;
	private String message;

	public RestException(String message, HttpStatus status) {
		this.message = message;
		this.status = status;
	}

	public HttpStatus getStatus() {
		return status;
	}

	public void setStatus(HttpStatus status) {
		this.status = status;
	}

	@Override
	public String getMessage() {
		return message;
	}

}