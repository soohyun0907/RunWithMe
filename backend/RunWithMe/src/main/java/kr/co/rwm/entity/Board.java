package kr.co.rwm.entity;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.JoinTable;
import javax.persistence.ManyToMany;
import javax.persistence.ManyToOne;
import javax.persistence.OneToMany;

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

	@OneToMany(targetEntity = BoardMedia.class, fetch = FetchType.LAZY)
	@JoinColumn(name = "media_id")
	private List<BoardMedia> boardMedia = new ArrayList<BoardMedia>();
}