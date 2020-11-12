package kr.co.rwm.dto;

import java.util.Date;

import kr.co.rwm.entity.User;
import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class ReplyDto {
	private Integer replyId;
	
	private Integer boardId;
	
	private String content;
	
	private Integer replyDepth;
	
	private Integer parentId;
	
	private Integer replyOrder;
	
	private Date regdate;
	
	private Date editdate;
	
	private User user; 
}
