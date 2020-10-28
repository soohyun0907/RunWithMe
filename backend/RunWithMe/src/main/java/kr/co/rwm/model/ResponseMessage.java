package kr.co.rwm.model;
public class ResponseMessage {
	
	public static final String SIGNUP_SUCCESS = "회원가입 성공";
	public static final String ALREADY_USER_EMAIL = "중복된 이메일";
	public static final String EMAIL_CHECK_OK = "회원 가입 가능한 Email";
	public static final String EMAIL_CHECK_FAIL = "이메일 중복 확인하세요";
	
	public static final String USER_NOT_FOUND = "사용자 정보 조회 실패";
    public static final String SIGNIN_SUCCESS = "로그인 성공";
    public static final String SIGNIN_FAIL = "로그인 실패";
    
    public static final String LOGOUT_SUCCESS = "로그아웃 성공";
    public static final String LOGOUT_FAIL = "로그아웃 실패";
    
    public static final String USERINFO_SEARCH_FAIL = "회원정보 조회 실패";
    public static final String USERINFO_SEARCH_SUCCESS = "회원정보 조회 성공";
    
    public static final String USER_DELETE_FAIL = "회원 탈퇴 실패";
    public static final String USER_DELETE_SUCCESS = "회원 탈퇴 성공";
    
    public static final String USER_UPDATE_FAIL = "회원 수정 실패";
    public static final String USER_UPDATE_SUCCESS = "회원 수정 성공";

    public static final String GROUP_LIST_SUCCESS = "그룹 채팅 목록 조회";
    
    public static final String RUNNING_GPS_SUCCESS = "현재 위치 목록 조회";
    public static final String UPDATE_THUMBNAIL_SUCCESS = "런닝 썸네일 저장 성공";
    public static final String UPDATE_THUMBNAIL_FAIL = "런닝 썸네일 저장 실패";
    
    public static final String CHALLENGE_INSERT_SUCCESS = "챌린지 등록 성공";
    public static final String CHALLENGE_INSERT_FAIL = "챌린지 등록 실패";
    public static final String CHALLENGE_UPDATE_SUCCESS = "챌린지 수정 성공";
    public static final String CHALLENGE_UPDATE_FAIL = "챌린지 수정 실패";
    public static final String CHALLENGE_DELETE_SUCCESS = "챌린지 삭제 성공";
    public static final String CHALLENGE_DELETE_FAIL = "챌린지 삭제 실패";
    public static final String CHALLENGE_LIST_SUCCESS = "챌린지 목록 조회 성공";
    public static final String CHALLENGE_LIST_FAIL = "챌린지 목록 조회 실패";
    public static final String CHALLENGE_SEARCH_SUCCESS = "챌린지 상세 조회 성공";
    public static final String CHALLENGE_SEARCH_FAIL = "챌린지 상세 조회 실패";
    public static final String CHALLENGE_ACCESS_FORBIDDEN = "권한 없음";
    public static final String CHALLENGE_PARTICIPATE_SUCCESS = "챌린지 참여 성공";
    
    public static final String AUTHORIZED = "인증 성공";
    public static final String UNAUTHORIZED = "인증 실패";
    public static final String FORBIDDEN = "인가 실패";

    public static final String INTERNAL_SERVER_ERROR = "서버 내부 에러";
    public static final String SERVICE_UNAVAILABLE = "현재 서비스를 사용하실 수 없습니다. 잠시후 다시 시도해 주세요.";

    public static final String DB_ERROR = "데이터베이스 에러";
    
    
    // 이미지 업로드 2020-10-27
	public static final String UPLOAD_PROFILE_SUCCESS = "프로필 이미지 업로드 성공";
    public static final String CREATE_CHATROOM_SUCCESS = "매칭 채팅방 생성 성공";

    public static final String READ_FRIENDLIST_SUCCESS = "친구목록 조회 성공";
    public static final String INSERT_FRIEND_SUCCESS = "친구 추가 성공";
    public static final String DELETE_FRIEND_SUCCESS = "친구 삭제 성공";
    
    
    public static final String READ_BOARDLIST_SUCCESS = "게시물 리스트 조회 성공";
    public static final String INSERT_BOARD_SUCCESS = "게시물 추가 성공";
    public static final String UPDATE_BOARD_SUCCESS = "게시물 수정 성공";
    public static final String DELETE_BOARD_SUCCESS = "게시물 삭제 성공";
    public static final String DETAIL_BOARD_SUCCESS = "게시물 상세 조회 성공";
    public static final String NOT_FOUND_BOARD = "게시물 조회 실패";
    
    public static final String READ_REPLY_SUCCESS = "댓글 리스트 조회 성공";
    public static final String INSERT_REPLY_SUCCESS = "댓글 추가 성공";
    public static final String UPDATE_REPLY_SUCCESS = "댓글 수정 성공";
    public static final String DELETE_REPLY_SUCCESS = "댓글 삭제 성공";
    public static final String NOT_FOUND_REPLY = "댓글 조회 실패";
    
    public static final String SIDO_LIST_SUCCESS = "모든 시도 조회 성공";
    public static final String SIDO_SEARCH_FAIL = "해당 시도 조회 실패";
    public static final String GUGUN_SEARCH_FAIL = "해당 구군 조회 실패";
    public static final String GUGUN_LIST_SUCCESS = "해당 시도 구군 조회 성공";
    public static final String ACTAREA_INSERT_SUCCESS = "유저 활동 지역 설정 성공";
    public static final String ACTAREA_INSERT_FAIL = "유저 활동 지역 설정 실패";
    public static final String ACTAREA_UPDATE_SUCCESS = "유저 활동 지역 수정 성공";
    public static final String ACTAREA_UPDATE_FAIL = "유저 활동 지역 수정 실패";
    
}