package kr.co.rwm.entity;

import java.util.Date;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;

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
public class Reply {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	@Column(name = "reply_id")
	private Integer replyId;
	
	@Column(name = "board_id", nullable = false)
	private Integer boardId;
	
	@Column(name = "content", nullable = false)
	private String content;
	
	@Column(name = "reply_depth", nullable = false)
	private Integer replyDepth;
	
	@Column(name = "parent_id", nullable = false)
	private Integer parentId;
	
	@Column(name = "reply_order", nullable = false)
	private Integer replyOrder;
	
	@Column(name = "regdate", nullable = false)
	private Date regdate;
	
	@Column(name = "editdate", nullable = false)
	private Date editdate;
	
	@ManyToOne(targetEntity = User.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "user_userId")
	private User user; 
}
