package kr.co.rwm.repo;

import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.data.jpa.repository.JpaRepository;

import kr.co.rwm.entity.Board;

public interface BoardRepository extends JpaRepository<Board, Long> {

	Optional<Board> findByBoardId(int parseInt);

	@Transactional
	Long deleteByBoardId(int board_id);

}
