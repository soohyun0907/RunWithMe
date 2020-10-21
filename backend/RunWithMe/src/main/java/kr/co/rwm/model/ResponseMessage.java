package kr.co.rwm.model;
public class ResponseMessage {

	public static final String USER_NOT_FOUND = "사용자 정보 조회 실패";
    public static final String SIGNIN_SUCCESS = "로그인 성공";
    public static final String SIGNIN_FAIL = "로그인 실패";
    
    public static final String ALREADY_USER_EMAIL = "중복된 이메일";
    public static final String SIGNUP_SUCCESS = "회원가입 성공";
    
    public static final String GROUP_LIST_SUCCESS = "그룹 채팅 목록 조회";
    
    
    public static final String AUTHORIZED = "인증 성공";
    public static final String UNAUTHORIZED = "인증 실패";
    public static final String FORBIDDEN = "인가 실패";

    public static final String INTERNAL_SERVER_ERROR = "서버 내부 에러";
    public static final String SERVICE_UNAVAILABLE = "현재 서비스를 사용하실 수 없습니다. 잠시후 다시 시도해 주세요.";

    public static final String DB_ERROR = "데이터베이스 에러";
}