package kr.co.rwm.dto;

import java.util.Date;

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
public class BoardDto {
	
   private Integer boardId;
   
   private Integer writerId;
   
   private String writerName;
   
   private String writerProfile;
   
   private String boardTitle;
   
   private String boardContent;
   
   private Date boardRegdate;
   
   private Date boardEditdate;
   
   private Integer readCount;

   private Integer replyCount;
   
   private String boardImage;
   
}