package kr.co.rwm.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

import lombok.AllArgsConstructor;
import lombok.Builder;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Entity
@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
@Builder
public class Board {
   @Id
   @GeneratedValue(strategy = GenerationType.IDENTITY)
   @Column(name = "board_id")
   private Integer boardId;
   
   @Column(name = "writer_id", nullable = false)
   private Integer writerId;
   
   @Column(name = "writer_name", nullable = false)
   private String writerName;
   
   @Column(length = 500, name = "writer_profile")
   private String writerProfile;
   
   @Column(name = "board_title", nullable = false)
   private String boardTitle;
   
   @Column(name = "board_content", nullable = false)
   private String boardContent;
   
   @Column(name = "board_regdate", nullable = false)
   private Date boardRegdate;
   
   @Column(name = "board_editdate", nullable = false)
   private Date boardEditdate;
   
   @Column(name = "read_count", nullable = false)
   private Integer readCount;

   @Column(name = "reply_count", columnDefinition = "Integer default 0")
   private Integer replyCount;
   
   @Column(length = 500, name = "board_image")
   private String boardImage;
   
}